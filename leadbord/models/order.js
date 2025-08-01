const { DataTypes } = require("sequelize");
const sequelize = require("../utile/database.");

const Order = sequelize.define("order", {
  orderid: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  paymentid: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.STRING,
  },
});

module.exports = Order;

