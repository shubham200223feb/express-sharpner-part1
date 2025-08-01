const express = require("express");
const Expense = require("../models/expencess");
const jwt = require("jsonwebtoken");
const { fn, col } = require("sequelize");
const User = require("../models/login");
const router = express.Router();

// ✅ isAuth middleware (with async)
const isAuth = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).send("No token found");

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByPk(decoded.userId);
    if (!user) return res.status(404).send("User not found");

    req.user = user; // ✅ Store full user
    next();
  } catch (err) {
    console.error("Auth Error:", err);
    return res.status(401).send("Unauthorized");
  }
};

// ✅ GET expenses page
router.get("/expencess", isAuth, async (req, res) => {
  try {
    const expenses = await Expense.findAll({
      where: { UserId: req.user.id }
    });

    res.render("expencess", {
      expenses,
      groupedExpenses: [],
      key_id: process.env.RAZORPAY_KEY_ID,
      userId: req.user.id,
      isPremium: req.user.isPremium
    });
  } catch (err) {
    console.error("Error fetching expenses:", err);
    res.status(500).send("Internal Server Error");
  }
});
router.get("/feachdata", isAuth, async (req, res) => {
  const allExpenses = await Expense.findAll({ where: { userId: req.user.id } });
  const groupedExpenses = await User.findAll({
    attributes: [
      'id',
      'name',
      'email',
      'totalamount'
    ],
    
    order: [['totalamount', 'DESC']],
  });

  // ✅ THIS IS IMPORTANT
  res.render("expencess", {
   expenses: allExpenses, 
    groupedExpenses, // exact spelling
    key_id: process.env.RAZORPAY_KEY_ID,
    userId: req.user.id,
    isPremium: req.user.isPremium
  });
});



// ✅ POST new expense
router.post("/add", isAuth, async (req, res) => {
  try {
    const { item, amount, category } = req.body;

    await Expense.create({
      item,
      amount,
      category,
      UserId: req.user.id // ✅ Correct field
    });
    const id= req.user.id;
    const user= await User.findByPk(id);
    user.totalamount+=parseInt(amount); 
    await user.save();

    res.redirect("/expencess");
  } catch (err) {
    console.error("Error adding expense:", err);
    res.status(500).send("Failed to add expense");
  }
});

module.exports = router;
