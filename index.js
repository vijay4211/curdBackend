const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());

// Routes

// Connect to MongoDB

//start server
app.listen(5000, () => {
  console.log("Server running on port : 5000");
});
