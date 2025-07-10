const express = require("express");
const app = express();

const routerhome = require("./router/home.js");
const routestudent = require("./router/student.js");
const routercourse = require("./router/course.js");

const port = 3000;

app.use("/", routerhome);
app.use("/student", routestudent);
app.use("/course", routercourse);

app.get("*", (req, res) => {
    res.status(404).send("Page not found");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
