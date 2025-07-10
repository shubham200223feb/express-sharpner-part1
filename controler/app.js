const express= require("express");
const routeruser=require("./routes/user.js");
const routerproduct = require("./routes/product.js");
const routercart= require("./routes/cart.js");
const app= express();
const port= 3000;
app.listen(port,()=>{
    console.log(`sever is ready to listen you with port number ${port}`);
})
app.get("/",(req,res)=>{
res.send("This is a nain page for this page ")
})
app.use("/user",routeruser);
app.use("/user/:id",routeruser);
app.use("/product",routerproduct);
app.use("/product/:id",routerproduct);
app.use("/cart",routercart);
app.use("/cart/:id",routercart);

