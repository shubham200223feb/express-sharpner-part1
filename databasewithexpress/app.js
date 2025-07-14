const express = require("express");
const path =require("path");
const app=express();
const mysql= require("mysql2");
const connection=mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'root',
    database:'student'   
})
connection.connect((error)=>{
    if(error){
        console.log(error);
    }
    console.log("we make connection whith databse sql");
    const user=`create table user(
    id int primary key,
    name varchar(30),
    email varchar(30)
    )`
    const buses=`create table buses(
    id int primary key,
    busnumber varchar(20),
    totalseat int,
    totalseatavaliable int)`
    const booking=`create table booking(
    id int primary key,
    seatnumber int)`
    const payment =`create table payment(
    id  int primary key,
    amountpaide int,
    paymentstatus varchar(20) )`
    connection.execute(user,(err)=>{
        if(err){
            console.log(err);
        }
        console.log("user table made");

    })
    connection.execute(buses,(err)=>{
        if(err){
            console.log(err);
        }
        console.log("buses table is make");
    })
    connection.execute(booking,(err)=>{
        if(err){
            console.log(err);
        }
        console.log("booking table is make");
    })
    connection.execute(payment,(err)=>{
        if(err){
            console.log(err);
        }
        console.log("payment table is make");
    })
})
const port = 3000;
const filepath =path.join(__dirname ,"/view/index.html");
app.get("/",(req,res)=>{
    res.sendFile(filepath);
})
app.listen(port,()=>{
    console.log("server is ready to hear your request");
})