const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
    res.send("Welcome to the home page");
});

module.exports = route;
