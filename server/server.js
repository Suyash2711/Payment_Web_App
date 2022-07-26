const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const User = require("./model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

try {
  mongoose.connect(
    "mongodb+srv://test:gytcm6eaL5nfGSLv@cluster0.4h2qo.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("DB Connected");
} catch (error) {
  console.log(error);
}

app.use("/", express.static(path.join(__dirname, "static")));
app.use(bodyParser.json());
app.post("api/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username, password }).lean();

  if (!user) {
    return res.json({ status: "error", error: "Invalid Username/Password" });
  }

  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ id: user.id, username: user.username });
    return res.json({ status: "ok", data: "" });
  }
  res.json({ status: "error", error: "Invalid Username/Password" });
});

app.post("http://127.0.0.1:5500/api/register", async (req, res) => {
  const { username, password: plainTextPassword } = req.body;
  console.log(req.body);
  if (!username || typeof username !== "string") {
    return res.json({ status: "error", error: "Invalid Username" });
  }

  if (!plainTextPassword || typeof plainTextPassword !== "string") {
    return res.json({ status: "error", error: "Invalid password" });
  }

  if (plainTextPassword.length < 5) {
    return res.json({
      status: "error",
      error: "Password too Small, should be atleast 6 characters",
    });
  }

  const password = await bcrypt.hash(plainTextPassword, 10);
  console.log(await bcrypt.hash(password, 10));

  try {
    const response = await User.create({
      username,
      password,
    });
    console.log("User created Successfully: ", response);
  } catch (error) {
    if (error.code === 11000) {
      return res.json({ status: "error", error: "Username already in Use" });
    }
    throw error;
  }

  res.json({ status: "ok" });
});
app.listen(3000, () => {
  console.log("Server is up at 3000");
});
