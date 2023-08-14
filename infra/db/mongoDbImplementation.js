const mongoose = require("mongoose");
const userCredentialModel = require("./userCredentialModel");

mongoose.connect(process.env.USER_CREDENTIALS_DB);

async function login(username, password) {
  const result = await userCredentialModel.find();
  console.log(result);
}

/**
 * Needs a user object passed in
 */
function createUserCredentials(userN, passW) {
  const userCredentials = new userCredentialModel({ username: userN, password: passW });
  userCredentials.save();
  console.log("User created sucessfully.");
}

module.exports = { createUserCredentials, login };
