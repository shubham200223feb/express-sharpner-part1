const { DataTypes } = require("sequelize");
const sequelize = require("../utile/database.");



const User = sequelize.define("User", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  isPremium: { type: DataTypes.BOOLEAN, defaultValue: false },
  totalamount:{
    type:DataTypes.INTEGER,
    defaultValue:0,
    allowNull:false,
  },
 
});



module.exports = User;
