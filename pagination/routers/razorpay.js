const express = require("express");
const Razorpay = require("razorpay");
const Order = require("../models/order"); // your Order table
const User = require("../models/login");
const jwt = require("jsonwebtoken");
const router = express.Router();

const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,

  key_secret: process.env.RAZORPAY_KEY_SECRET,
});
console.log("KEY ID:", process.env.RAZORPAY_KEY_ID);
console.log("KEY SECRET:", process.env.RAZORPAY_KEY_SECRET);

// Middleware: isAuth
const isAuth = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByPk(decoded.userId);
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).send("Unauthorized");
  }
};

// ✅ Create Razorpay Order
router.post("/create/order", isAuth, async (req, res) => {
  try {
    const amount = 25000; // ₹250

    const order = await razorpayInstance.orders.create({
      amount,
      currency: "INR",
    });

    await Order.create({
      orderid: order.id,
      status: "PENDING",
      loginId: req.user.id,
    });

    res.json({ order, key_id: process.env.RAZORPAY_KEY_ID });
  } catch (err) {
    console.error("Error creating Razorpay order", err);
    res.status(500).send("Server Error");
  }
});

// ✅ Update Order Status on Success
router.post("/update/order-status", isAuth, async (req, res) => {
  const { order_id, payment_id } = req.body;

  const order = await Order.findOne({ where: { orderid: order_id } });
  if (!order) return res.status(404).send("Order not found");

  order.paymentid = payment_id;
  order.status = "SUCCESS";
  await order.save();

  req.user.isPremium = true;
  await req.user.save();

  // Update new token with premium = true
  const token = jwt.sign({ userId: req.user.id }, process.env.JWT_SECRET);
  res.cookie("token", token);

  res.json({ success: true });
});

module.exports = router;
