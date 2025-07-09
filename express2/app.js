const express= require("express");
const app = express();
let port = 3000;
app.use((req,res ,next)=>{
    req.user="Guest";
    next(); 
})
app.get("/",(req,res)=>{
    res.send("this is home page");
})
app.get("/welcome",(req,res)=>{
    res.send(`welcome :${req.user}`);
})
app.listen(port,()=>{
    console.log(" server is ready to listen you");
})



