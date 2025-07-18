const express = require("express");
const path=require("path");
const bodyParser = require("body-parser");
const sequelize = require("./utile/database.js");
const User = require("./model/tabel.js");
const filepath=path.join(__dirname,"./public/index.html");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


sequelize.sync().then(() => {
  console.log("Database synced");
});
app.get("/",(req,res)=>{
res.send("hello");
})
app.get("/form",(req,res)=>{
res.sendFile(filepath);
})
app.post("/form/submit", async (req, res) => {
  const { name, email } = req.body;
  try {
    await User.create({ name, email });
    res.send("User data saved successfully");
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).send("Something went wrong");
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});