const express = require("express");
const router=express.Router();

const container=require("../container/containercart.js");


router.get("/:id",container.cartbyid);
router.post("/:id",container.cartpost)
module.exports= router;