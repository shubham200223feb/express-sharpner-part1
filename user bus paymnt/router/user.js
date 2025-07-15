const express= require("express");
const database=require("../util/database.js");
const userrouter=express.Router();
userrouter.get("/", (req,res)=>{

    const take =`select  * from user`;
    database.execute(take,(error,result)=>{
        if(error){
            console.log("not able to feach data from table user");
        }
        console.log(result);
        res.status(200).send(result);
    })
})

userrouter.post("/add",(req,res)=>{
    const {id,name,email}=req.body;
    const insert =`insert into user(id,name,email)  values(?,?,?)`;
    database.execute(insert,[id,name,email],(error)=>{
        if(error){
            res.status(400).send(error)
        }
        console.log("dat add sucessfully");
        res.send("data added sucsfully");
    })
    
})
module.exports=userrouter;