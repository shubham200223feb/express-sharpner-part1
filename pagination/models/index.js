const User = require("./login");
const Expense = require("./expencess");
const Order = require("./order");
const forget= require("./password")



// 1 User => Many Expenses
User.hasMany(Expense);
Expense.belongsTo(User);

// 1 User => Many Orders
User.hasMany(Order);
Order.belongsTo(User);

