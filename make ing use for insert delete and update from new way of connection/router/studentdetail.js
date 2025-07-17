const  express= require("express");
const router=express.Router();
const table=require("../model/tabel.js");
router.post("/add",async(req,res)=>{
    const {name,email}=req.body;
    try{
      const store=  await table.create({ name: name, email: email })
      console.log(`the data is save for id ${store.id}`);
      res.status(201).send("data is insert in table");
    }
    catch(error){
        console.log("error is happen while storing data in table");
        res.status(404).send("error while insert data in table");
    }
})
router.get("/data",async(req,res)=>{
    try{
        const result=await table.findAll();
        console.log("we feach hole data");
        res.status(202).send(result);
    }
    catch(error){
        console.log("error while feaching data from databse");
        res.status(404).send("error while feaching data");
    }

})
router.put("/update/:id",async(req,res)=>{
    const id=req.params.id;
    const {name,email}=req.body;
    try{
       const upd= await table.findByPk(id);
       if(!upd){
        console.log("plss type right id");
        res.status(400).send("plsss ascess right id");
       }
       upd.name=name;
       upd.email=email;
       res.status(200).send("data is updates sucessfully");
    }
    catch(error){
        console.log("eror while updateing the table");
res.status(404).send("data cant we update error while update");
    }
})
module.exports=router;