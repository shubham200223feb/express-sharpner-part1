const mysql=require("mysql2");
const conection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"managment"
})
conection.connect((error)=>{
    if(error){
        console.log(error);
    }
    console.log("database is created");
    const user=`create table if not exists user( 
     id int,
    name varchar(20),
    email varchar(20)
    )`
    conection.execute(user,(error)=>{
        if(error){
            console.log(error);
        }
        console.log("table user is created sucessfully");
    })
     const bus=`create table if not exists bus( 
     id int,
    busnumber varchar(20),
    avaliableseat int,
    totalseat int
    )`
    conection.execute(bus,(error)=>{
        if(error){
            console.log(error);
        }
        console.log("table bus is created sucessfully");
    })
     const booking=`create table if not exists booking( 
     id int,
     seatnumber int
    )`
    conection.execute(booking,(error)=>{
        if(error){
            console.log(error);
        }
        console.log("table booking is created sucessfully");
    })
     const payment=`create table if not exists payment( 
     id int,
    amountpay int,
    bookingstatus varchar(20)
    )`
    conection.execute(payment,(error)=>{
        if(error){
            console.log(error);
        }
        console.log("table payment is created sucessfully");
    })
})
module.exports=conection;