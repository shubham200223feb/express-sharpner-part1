const { Sequelize } = require("sequelize");

const sequeliz=new Sequelize("student","root","root",{
    host:"localhost",
    dialect:"mysql"
});
(async()=>{try{
await sequeliz.authenticate();

console.log("data base is created")
}catch(error){
    console.log("error while conted with database",error);

}})();
module.exports=sequeliz;