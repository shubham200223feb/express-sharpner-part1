const {Sequelize,DataTypes}=require("sequelize");
const conection=require("../utile/database.js");
const department =conection.define('department',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    departmentname:{
        type:DataTypes.STRING,
        allowNull:false,
    }
});
module.exports=department;