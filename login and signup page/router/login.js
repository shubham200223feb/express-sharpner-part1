const tabel = require("../mode/person.js");
const express=require("express");
const router= express.Router();

router.post("/submit",async(req,res)=>{
    const{name,email}=req.body;
    try{
        const data=await tabel.findOne({where:{email:email,name:name}});
        if(!data){
            res.status(202).redirect("/signup")
        }
        else{
            res.status(200).send("data is present you can move to home page")
        }
    
    }
    catch(error){
res.status(401).send("error while saveing dta in tabel");
    }
});
module.exports=router;