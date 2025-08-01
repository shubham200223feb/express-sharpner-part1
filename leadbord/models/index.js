const User = require("./model/login");
const Expense = require("./model/expencess");
const Order = require("./model/order");

// 1 User => Many Expenses
User.hasMany(Expense);
Expense.belongsTo(User);

// 1 User => Many Orders
User.hasMany(Order);
Order.belongsTo(User);
