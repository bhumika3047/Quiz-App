const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
});

module.exports = mongoose.model("user", userSchema);
