const {Sequelize,DataTypes}=require("sequelize");
const databse=require("../utile/database.js");
const data=databse.define('data',{
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
    },
});
module.exports=data;