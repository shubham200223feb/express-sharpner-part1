 const express= require("express");
const app= express()
const routerbook=require("./router/book.js");
app.get("/",(req,res)=>{
    res.send("this is home page to see the router implemetation goo to book");
})
app.use("/book",routerbook);
const port= 3000;
app.listen(port,()=>{
    console.log("ther server is ready to hear you ");
})
