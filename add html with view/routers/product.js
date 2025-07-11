const path = require("path");
const filepath= path.join(__dirname,"../view/product.html");
const express=require("express");
const router= express.Router();
router.get("/",(req,res)=>{
    res.sendFile(filepath);
})
router.get("/:id",(req,res)=>{
    const id =req.params.id;
    res.send(`feaching data from id : %${id}`);
})
router.post("/",(req,res)=>{
    res.send("Add new prosuct to it");
})
module.exports= router;