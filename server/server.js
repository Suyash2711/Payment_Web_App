require("dotenv").config({ path: "./config.env" });
const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const User = require("./models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");

app.use(express.json());
app.use(cors());

try {
  mongoose.connect(
    "mongodb+srv://test:gytcm6eaL5nfGSLv@cluster0.4h2qo.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("DB Connected");
} catch (error) {
  console.log(error);
}

app.get("/", (req, res, next) => {
  res.send("Api running");
});

app.use("/api/auth", require("./routes/auth"));

app.listen(3000, () => {
  console.log("Server is up at 3000");
});
