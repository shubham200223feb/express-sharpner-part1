require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const sequelize = require("./utile/database..js");
const loginRoutes = require("./routers/loginsignup.js");
const expenseRoutes = require("./routers/expenncess.js");
const razorpayRoutes = require("./routers/razorpay.js");
const password= require("./model/password.js");
const user=require("./model/login.js");
user.hasMany(password);
password.belongsTo(user);

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cookieParser());





app.use(loginRoutes);
app.use(expenseRoutes);
app.use(razorpayRoutes);


  app.listen(3000, () => console.log("Server started on port 3000"));

