//const databaseImplementation = require("../infra/db/mongoDbImplementation");

const { user } = require("../entities/user");

//Credentials
function login(username, password) {
  const databaseImplementation = require("../infra/db/mockCredentials");
  const attemptedLogin = databaseImplementation.login(username, password);
  if (attemptedLogin != null) {
    return attemptedLogin;
  } else {
    return null;
  }
}

function createUserCredentials(username, password) {
  const databaseImplementation = require("../infra/db/mockCredentials");
  if (databaseImplementation.createUserCredentials(username, password) === 1) {
    return 1;
  } else {
    console.log("Unable to create user.");
  }
}

//Users
/**
 * @returns User object with populated info from database
 * @param {number} id - Id of user to lookup in database
 */
function getUserData(id) {
  databaseImplementation = require("../infra/db/mockUsers");
  return databaseImplementation.findUserById(id);
}

module.exports = { login, createUserCredentials, getUserData };
