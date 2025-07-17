const express=require("express");
const app = express();
const database=require("./utile/database.js");
const table=require("./model/tabel.js");
const rout= require("./router/studentdetail.js");
const port= 3000;
table.sync({alter:true})
.then(()=>{
    console.log("table is made")
}).catch((error)=>{
console.log("table not made in database",error);
})
app.use(express.json());
app.use("/student",rout);
app.listen(port,()=>{
    console.log("the server is resdy to hear you");
})