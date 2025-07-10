const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
    res.send("/students - List all students.");
});

route.get("/:id", (req, res) => {
    const id = req.params.id;
    res.send(`Fetch a student by ID: ${id}`);
});

module.exports = route;
