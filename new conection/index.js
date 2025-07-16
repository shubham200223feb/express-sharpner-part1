const express= require("express");
const database=require("./utile/database.js");
const table =require("./model/table.js");
database.sync({ force: false }) 
  .then(() => {
    console.log("✅ Database synced and table created");
  })
  .catch((err) => {
    console.error("❌ Error syncing database:", err);
  });
const app = express();
const port = 3000;
app.listen(port,()=>{
    console.log("the server is ready to listen you");
})
