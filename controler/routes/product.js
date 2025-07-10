const express = require("express");
const router=express.Router();
const container=require("../container/containerproduct.js");


router.get("/",container.productget)
router.get("/:id",container.productget)
router.post("/",container.productpost)
module.exports= router;