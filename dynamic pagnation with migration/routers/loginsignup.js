const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const password= require("../model/password");
const User = require("../model/login");
const router = express.Router();
const crypto = require("crypto");
const sendResetEmail = require("../utile/emai");
const { where, json } = require("sequelize");
const UUID = require("uuid");
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
  const id = UUID.v4();
  await password.create({id:id,UserId:user.id,isactive:true });


const link=`http://localhost:3000/reset-password/${id}`;

  await sendResetEmail(email,link);
  res.render("login");
});
router.get("/reset-password/:id", async (req, res) => {
  const tokenId = req.params.id;
  console.log(req.params)
   const token = await password.findByPk(tokenId);
  if (!token || !token.isactive) {
    return res.send("Invalid or expired link");
  }
  res.render("reset",{tokenId});
})

router.post("/reset-password/:id", async (req, res) => {
  try {
    const tokenId=req.params.id;
    const {newpassword} = req.body;
    console.log(tokenId);
    console.log(newpassword);
    const newhash=await bcrypt.hash(newpassword,10);
    const data= await password.findByPk(tokenId);
    if(!data){
      console.log("error data is not present with tokenid");
      return res.render("sign")
    }
    const user=await User.findOne({where:{id:data.UserId}});
    user.password=newhash;
    await user.save();
    data.isactive=false;
    await data.save();
    res.render("login");
  }catch(error){
console.log("error while upadating the password");
  }
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
