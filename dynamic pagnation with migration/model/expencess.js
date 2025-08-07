const { DataTypes } = require("sequelize");
const sequelize = require("../utile/database.");
const User = require("./login");

const Expense = sequelize.define("Expense", {
  item: DataTypes.STRING,
  amount: DataTypes.INTEGER,
  category: DataTypes.STRING,
  description:{
    type:DataTypes.STRING,
    allowNull:true,
  }
});

User.hasMany(Expense);
Expense.belongsTo(User);

module.exports = Expense;
