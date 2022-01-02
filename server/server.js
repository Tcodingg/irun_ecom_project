require("dotenv").config;
const express = require("express");
var cors = require("cors");
const connectDB = require("./config/db");
const productsRoute = require("./routes/productsRoute");
const usersRoutes = require("./routes/users/usersRoute");

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;

connectDB();

app.use("/api/products", productsRoute);
app.use("/api/auth", usersRoutes);

app.listen(PORT, () => console.log("server is connected"));
