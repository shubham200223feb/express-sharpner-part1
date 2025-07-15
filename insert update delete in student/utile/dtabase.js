const mysql = require("mysql2");
const create = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"managment"
})
create.connect((error)=>{
    if(error){
        console.log(error);
        return;
    }
    console.log("connected to database");
    const table=`create table if not exists student(
    id int auto_increment primary key,
    name varchar(20),
    email varchar(20),
    age int
    ) `
     create.execute(table,(error)=>{
        if(error){
            console.log(error);
            return;
        }
        console.log("table is created ");
        

     })
})
module.exports=create;