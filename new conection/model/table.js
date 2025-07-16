const { Sequelize, DataTypes } = require('sequelize');
const sequelize=require("../utile/database.js");
const user=sequelize.define(
    'User2',
  {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      
    },
  },);
  module .exports=user;

