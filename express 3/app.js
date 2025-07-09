const express = require("express");
const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); 
});





app.get("/orders", (req, res) => {
  res.send("Here is the list of all orders.");
});

app.post("/orders", (req, res) => {
  res.send("A new order has been created.");
});


app.get("/users", (req, res) => {
  res.send("Here is the list of all users.");
});


app.post("/users", (req, res) => {
  res.send("A new user has been added.");
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


