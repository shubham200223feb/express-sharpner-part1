const{Sequelize}= require("sequelize");
const conection=new Sequelize("data" ,"root" ,"root",{
    host:"localhost",
    dialect:"mysql"
});
(async()=>{
    try{
        await conection.authenticate();
        console.log("conected to data base");

    }catch(error){
        console.log("error while conecting with databse");
    }
})
module.exports=conection;