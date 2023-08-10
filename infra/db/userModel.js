const mongoose = require("mongoose");

function getUserModel() {
  const userSchema = new mongoose.Schema({
    id: String,
    name: String,
    teams: team,
    email: String,
  });
  return mongoose.model("userCredentials", userCredentialSchema);
}
