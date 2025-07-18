const {Sequelize,DataTypes}=require("sequelize");
const conection=require("../utile/database.js");
const student =conection.define('student',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
    }
});
module.exports=student;