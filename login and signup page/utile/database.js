const{Sequelize, Model}=require("sequelize");
const conection=new Sequelize("fullstack","root","root",{
    host:"localhost",
    dialect:"mysql",
});
(async()=>{
    try{
        await conection.authenticate();
        console.log("database is coneccted")

    }catch(error){
        console.log("error while connecting with database");
    }
})
module.exports=conection;