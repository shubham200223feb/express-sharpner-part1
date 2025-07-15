const express= require("express");
const databse= require("./util/database.js");
const userrout=require("./router/user.js");
const bookrout=require("./router/booking.js");

const app = express();
const port =3000;
app.use(express.json());
app.use("/user",userrout);
app.use("/booking",bookrout);
app.listen(port,()=>{
    console.log("server is ready to hear you");
})
