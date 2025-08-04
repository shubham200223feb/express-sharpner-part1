const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/login");
const router = express.Router();
const crypto = require("crypto");
const sendResetEmail = require("../utile/emai");
const { where } = require("sequelize");

const JWT_SECRET = process.env.JWT_SECRET;

router.get("/", (req, res) => res.render("login"));
router.get("/login", (req, res) => res.render("login"));
router.get("/signup", (req, res) => res.render("sign"));
router.get("/forgot-password", (req, res) => {
  res.render("forgot-password");
});
router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user) {
    console.log("usernotfound")
     return res.render("sign");
  }
  
  await sendResetEmail(email);
  res.render("login");
});


router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  await User.create({ name, email, password: hash });
  res.redirect("/login");
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if(!user){
    res.render("sign")
  }
  else if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.send("Invalid credentials");
  }
  const token = jwt.sign({ userId: user.id }, JWT_SECRET);
  res.cookie("token", token);
  res.redirect("/expencess");
});

module.exports = router;
