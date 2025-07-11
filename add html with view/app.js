const express = require("express");
const app = express();
const productrout=require("./routers/product.js");
const port=3000;
app.listen(port,()=>{
    console.log("the is ready to listen you in port 3000 ");
})
app.get("/",(req,res)=>{
    res.send("this is front page go to product");
})
app.use("/product",productrout);
