const student=require("./student.js");
const department=require("./department.js");
//const { HasMany, BelongsTo } = require("sequelize");
department.hasMany(student)
student.belongsTo(department)

module.exports={
    student,
    department
}