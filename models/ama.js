const mongoose = require("mongoose");

// Blog Schema
const amaSchema = new mongoose.Schema({
  question: String,
  answer: String,
  isAnswered: Boolean,
});

// Create and export a model with that schema
module.exports = mongoose.model.Ama || mongoose.model("Ama", amaSchema);
