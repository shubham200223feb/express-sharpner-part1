require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const sequelize = require("./utile/database..js");
const loginRoutes = require("./routers/loginsignup.js");
const expenseRoutes = require("./routers/expenncess.js");
const razorpayRoutes = require("./routers/razorpay.js");

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cookieParser());


(async () => {
  try {
    await sequelize.sync({ alter: true }); // or { force: true } for full reset
    console.log("Database synced with associations");
  } catch (err) {
    console.error("Sync error:", err);
  }
})();


app.use(loginRoutes);
app.use(expenseRoutes);
app.use(razorpayRoutes);

sequelize.sync({ alter: true }).then(() => {
  app.listen(3000, () => console.log("Server started on port 3000"));
});
