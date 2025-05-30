const mongoose = require("mongoose");

const questionsSchema = new mongoose.Schema({
  question: { type: String, default: null },
  options: { type: Array, unique: true },
  correctOption: { type: Number },
  points: { type: Number },
});

module.exports = mongoose.model("questions", questionsSchema);