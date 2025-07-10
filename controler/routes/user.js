const express = require("express");
const container=require("../container/containeruser.js");
const router=express.Router();


router.get("/",container.userget);
router.get("/:id",container.usergetbyid)
router.post("/",container.userpost)
module.exports= router;