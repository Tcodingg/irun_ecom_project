require("dotenv").config;
const express = require("express");
const cors = express("cors");
const connectDB = require("./config/db");
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
   res.send("server is running");
});

app.listen(PORT, () => console.log("server is connected"));
