const mongoose = require("mongoose");

const userCredentialSchema = new mongoose.Schema({
  username: String,
  password: String,
});

module.exports = mongoose.model("userCredentials", userCredentialSchema);
