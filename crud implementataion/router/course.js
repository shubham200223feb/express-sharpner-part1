const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
    res.send("/courses - List all courses.");
});

route.get("/:id", (req, res) => {
    const id = req.params.id;
    res.send(`Fetch a course by ID: ${id}`);
});

module.exports = route;
