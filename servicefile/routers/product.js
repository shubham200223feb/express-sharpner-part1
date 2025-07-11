const container=require("../container/container.js");
const express=require("express");
const router= express.Router();
router.get("/",container.getProduct);
router.get("/:id",container.getproductbyid)
router.post("/",container.postproduct)
module.exports= router;