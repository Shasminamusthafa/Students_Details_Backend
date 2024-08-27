require("dotenv").config();
const express = require("express");
const studRoutes = require ("./routes/students/students");
const db = require("./db/index");
const app = new express();
const port = process.env.PORT || 8008;
db();
app.use(express.json());
app.use("/student",studRoutes);
app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
});

