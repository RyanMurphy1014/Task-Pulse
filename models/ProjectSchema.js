const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: String,
  members: [String],
});

module.exports = mongoose.model("Projects", projectSchema);
