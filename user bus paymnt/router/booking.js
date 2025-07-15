const express = require("express");
const database = require("../util/database.js");
const busRouter = express.Router();


busRouter.post("/add", (req, res) => {
    const {id, busnumber, avaliableseat, totalseat } = req.body;
    const query = `INSERT INTO bus (id,busnumber, avaliableseat, totalseat) VALUES (?, ?, ?,?)`;

    database.execute(query, [id,busnumber, avaliableseat, totalseat], (err, result) => {
        if (err) {
            console.error(" Error adding bus:", err);
            return res.status(400).send("Error adding bus");
        }
        res.status(201).send("Bus added successfully");
    });
});


busRouter.get("/available/:seats", (req, res) => {
    const seatThreshold = parseInt(req.params.seats);
    const query = `SELECT * FROM bus WHERE availableseat > ?`;

    database.execute(query, [seatThreshold], (err, result) => {
        if (err) {
            console.error("Error fetching buses:", err);
            return res.status(500).send("Error fetching buses");
        }
        res.status(200).json(result);
    });
});

module.exports = busRouter;
