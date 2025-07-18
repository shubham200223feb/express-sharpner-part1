const {Sequelize}=require("sequelize");
const conection= new Sequelize("onetomany","root","root",{
    host:"localhost",
    dialect:"mysql"
});
(async()=>{try{
    await conection.authenticate();
    console.log("conection is make for one to many databse")

}catch(error){
    console.log("eor is happen while doing conection");
}})();
module.exports=conection;