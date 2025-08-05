const express = require("express");
const Expense = require("../models/expencess");
const jwt = require("jsonwebtoken");
const { fn, col } = require("sequelize");
const User = require("../models/login");
const sequelize = require("../utile/database."); // Correct import for DB connection
const router = express.Router();

//  isAuth middleware
const isAuth = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).send("No token found");

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByPk(decoded.userId);
    if (!user) return res.status(404).send("User not found");

    req.user = user;
    next();
  } catch (err) {
    console.error("Auth Error:", err);
    return res.status(401).send("Unauthorized");
  }
};

//  GET expenses page
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

//  Leaderboard data
router.get("/feachdata", isAuth, async (req, res) => {
  const allExpenses = await Expense.findAll({ where: { userId: req.user.id } });
  const groupedExpenses = await User.findAll({
    attributes: ['id', 'name', 'email', 'totalamount'],
    order: [['totalamount', 'DESC']],
  });

  res.render("expencess", {
    expenses: allExpenses,
    groupedExpenses,
    key_id: process.env.RAZORPAY_KEY_ID,
    userId: req.user.id,
    isPremium: req.user.isPremium
  });
});

//  DELETE expense with transaction
router.post("/delete", isAuth, async (req, res) => {
  const { userid, amount, expencesid } = req.body;
  const t = await sequelize.transaction();

  try {
    const user = await User.findByPk(userid, { transaction: t });
    if (!user) {
      await t.rollback();
      return res.status(404).send("User not found");
    }

    user.totalamount -= parseInt(amount);
    if (user.totalamount < 0) user.totalamount = 0;
    await user.save({ transaction: t });

    await Expense.destroy({ where: { id: expencesid }, transaction: t });

    await t.commit();
    res.redirect("/expencess");
  } catch (error) {
    await t.rollback();
    console.error("Delete error:", error);
    res.status(500).send("Error while deleting expense");
  }
});

//  ADD new expense with transaction
router.post("/add", isAuth, async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const { item, amount, category } = req.body;

    await Expense.create({
      item,
      amount,
      category,
      UserId: req.user.id
    }, { transaction: t });

    const user = await User.findByPk(req.user.id, { transaction: t });
    user.totalamount += parseInt(amount);
    await user.save({ transaction: t });

    await t.commit();
    res.redirect("/expencess");
  } catch (err) {
    await t.rollback();
    console.error("Error adding expense:", err);
    res.status(500).send("Failed to add expense");
  }
});

module.exports = router;
