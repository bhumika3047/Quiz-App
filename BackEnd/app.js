require("dotenv").config();
require("./config/database").connect();

const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
var cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());

const User = require("./model/user");
const Questions = require("./model/questions");

// Register API
app.post("/register", async (req, res) => {
  try {
    // Check if the email already exists
    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    console.log("hashedPassword", hashedPassword);

    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "User not registered successfully" });
  }
});

// Login API
app.post("/login", async (req, res) => {
  try {
    // Check if the email exists
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ email: user.email }, "secret");
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: "User not login successfully" });
  }
});

// Login API
app.post("/questions/create", async (req, res) => {
  try {
    // Check if the email exists
    const question = await Questions.findOne({ question: req.body.question });

    if (question) {
      return res.status(401).json({ error: "Question already exists." });
    }

    if (req.body.options) {
      //put validation if not array
    }

    const newQuestion = await Questions.create({
      question: req.body.question,
      options: req.body.options,
      correctOption: req.body.correctOption,
      points: req.body.correctOption,
    });

    await newQuestion.save();
    res.status(201).json({ message: "Question create successfully" });
  } catch (error) {
    res.status(500).json({ error: "Question not create successfully" });
  }
});

app.get("/questions/list", async (req, res) => {
  try {
    const list = await Questions.find();

    res.status(200).json({ list });
  } catch (error) {
    res.status(500).json({ error: "Questions are Not found" });
  }
});
// Protected route to get user details
app.get("/user", async (req, res) => {
  try {
    // Fetch user details using decoded token
    const user = await User.findOne({ email: req.user.email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ username: user.username, email: user.email });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to my User Registration and Login API!");
});

module.exports = app;
