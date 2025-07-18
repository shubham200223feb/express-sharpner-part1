// Router setup
const express = require("express");
const router = express.Router();

// Model import (association ke sath)
const { student, department } = require("../model/index.js");

// POST API
router.post("/add", async (req, res) => {
    try {
        // Request se data nikalo
        const { departmentname, students } = req.body;

        // Pehle department create karo, saath hi students bhi insert ho jayein
        const newDepartment = await department.create(
            {
                departmentname: departmentname,
                students: students
            },
            {
                include: [student] // yeh batata hai ke "hasMany(student)" relation follow karo
            }
        );

        res.status(201).json({
            message: "Department and students added successfully!",
            data: newDepartment
        });

    } catch (error) {
        console.log("❌ Error aaya:", error);
        res.status(500).json({ error: "Kuch galat ho gaya" });
    }
});

module.exports = router;
