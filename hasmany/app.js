const express = require("express");
const app = express();
const router = require("./Router/adddata.js");
const database = require("./utile/database.js");
const student = require("./model/student.js");
const department = require("./model/department.js");
require("./model/index.js"); // association file

const port = 3000;

// association ke baad sync karo
(async () => {
  try {
    await database.sync({ alter: true });
    console.log("All tables synced with associations!");
  } catch (error) {
    console.log("Error in syncing tables", error);
  }
})();

app.use(express.json());
app.use("/student", router);

app.listen(port, () => {
  console.log("server is ready to hear you");
});
