const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('managment', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});
(async ()=>{
    try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.log('Unable to connect to the database:', error);
}})();
module.exports=sequelize;