const mongoose = require("mongoose");
const userCredentialsModel = require("./userCredentialModel");

mongoose.connect(process.env.USER_CREDENTIALS_DB);

function login(username, password) {}

/**
 * Needs a user object passed in
 */
function createUserCredentials(userN, passW) {
  const userCredentials = new userCredentialsModel({ username: userN, password: passW });
  userCredentials.save();
  console.log("User created sucessfully.");
}

module.exports = { createUserCredentials, login };
