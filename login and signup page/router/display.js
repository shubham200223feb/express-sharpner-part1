const express= require("express");
const route= express.Router();
const database=require("../utile/database.js")
const tabel= require("../mode/person.js");


route.get("/",async(req,res)=>{

try {
    const personlist = await tabel.findAll(); // array of objects
    res.render("vie", { persons: personlist });
  } catch (err) {
    res.send("Error: " + err.message);
  }
});

module.exports = route;