const {DataTypes, INTEGER}=require("sequelize");
const database=require("../utile/database.js");
const logintabel=database.define("logintabel",{
    id:{
   primaryKey:true,
   type:DataTypes.INTEGER,
   autoIncrement:true,
   allowNull:false,
},
name:{
type:DataTypes.STRING,
allowNull:false,
},
email:{
    type:DataTypes.STRING,
    allowNull:false,
}
})
module.exports=logintabel;
