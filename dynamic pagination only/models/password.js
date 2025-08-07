const {DataTypes}=require("sequelize");
const database=require("../utile/database.");
const { v4: uuidv4 } = require("uuid");
const password=database.define("password",{
    id:{
type:DataTypes.UUID,

primaryKey:true,
allowNull:false,
    },
isactive: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  
});
module.exports=password;