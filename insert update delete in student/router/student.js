const database=require("../utile/dtabase.js");
const express=require("express");
const route=express.Router();
route.get("/data",(req,res)=>{
    const query=`select * from student`;
    database.execute(query,(error,result)=>{
        if(error){
            console.log(error);
            res.status(400).send("error is found");
        }
        console.log("This is data",result);
        res.status(200).send(result);
    })

})
route.post("/add",(req,res)=>{
    const{name,email,age}=req.body;
const insert=`insert into student(name,email,age) values(?,?,?)`
database.execute(insert,[name,email,age],(error)=>{
    if(error){
        console.log(error);
        res.status(400).send(error);
    }
    console.log("data is insert in database");
    res.status(201).send("data is enter in database");
})
})
route.put("/update/:id",(req,res)=>{
    const id= req.params.id;
    const {name}= req.body;
    const update = `update student set name=? where id=?`;
    database.execute(update,[name,id],(error)=>{
        if(error){
            console.log("eror whiledoing update",error);
            res.status(400).send("error is present ");
        }
        console.log("this is update and upadte is done ");
        res.status(200).send("updateion is done completed");

    })
})
route.delete("/delete/:id",(req,res)=>{
    const id =req.params.id;
    const del= `delete from student where id =?`;
    database.execute(del,[id],(error)=>{
        if (error){
            console.log(error);
            res.status(200).send(error);
        }
        console.log("data is deleted sucresfully");
        res.set(201).send("data delete susessfully");
    })

})
module.exports=route;
