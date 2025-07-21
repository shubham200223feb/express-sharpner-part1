const express= require("express");
const router = express.Router();
const path = require("path");
const filepath= path.join(__dirname,"../public/signup.html");
const tabel =require("../mode/person.js");
router.get("/",(req,res)=>{
res.status(202).sendFile(filepath);
})
router.post("/submit",async(req,res)=>{
    const{name,email}=req.body;
    try{
        await tabel.create({name:name,email:email});
        res.status(202).send("going to homepage your account is created");

    }catch(error){
res.status(400).send("error while creating  account");
    }
});
module.exports=router;