const express= require("express");
const path = require("path");
const filepath=path.join(__dirname,"./public/index.html");
const app = express();
const bodyParser=require("body-parser");
const port = 3000;
const router=require("./router/login.js");
const database= require("./utile/database.js")
const tabel=require("./mode/person.js");
const quantity=require("./mode/data.js");
const homerouter= require("./router/display.js");
const signuprouter=require("./router/signup.js");
try{database.sync({alter:true})
console.log ("all tabel are sync")}
catch(error){
    console.log("error while sync database");
}
app.use(bodyParser.urlencoded({extended:true}));
//app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.sendFile(filepath);
})
app.use("/home",homerouter);
app.use("/signup",signuprouter)
app.use("/form",router);
app.listen(port,()=>{
    console.log(" server is rady to hear you");
})