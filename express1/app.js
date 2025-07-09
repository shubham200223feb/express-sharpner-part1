const expres=require("express");
const app=expres();
 const port = 3000;
 app.listen(port,()=>{
    console.log("server is ready to listen");
 })
app.use((req,res)=>{

    res.send("hello");

})