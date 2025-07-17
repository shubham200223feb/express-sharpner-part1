const { Sequelize ,DataTypes} = require("sequelize");
const database= require("../utile/database.js");
const student=database.define(
    'studentdetail',{
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
    }
);
module.exports=student;