const express= require("express");
const path = require("path");
const fileaddress = path.join(__dirname,"/view/front.html");
const app= express();
const route=require("./router/student.js");
const database=require("./utile/dtabase.js");
const port =3000;
app.use(express.json());
app.get("/",(req,res)=>{
    res.sendFile(fileaddress);
})
app.use("/student",route);
app.listen(port,()=>{
    console.log(`server is ready to hear at portnumber ${port}`);
})