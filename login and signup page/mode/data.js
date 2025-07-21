const {DataTypes}= require("sequelize");
const database =require("../utile/database.js");
const quantity=database.define('quantity',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:false,
    },
    name:{
        primaryKey:true,
        type:DataTypes.STRING,
        allowNull:false
    },
    quantity:{
        type:DataTypes.INTEGER,
        allowNull:false,
    }
})
module.exports=quantity;