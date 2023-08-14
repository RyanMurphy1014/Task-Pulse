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

function searchUsersByName(name) {
  databaseImplementation = require("../infra/db/mockUsers");
  return databaseImplementation.searchUsersByName(name);
}

function setUserValue(valueBeingChanged, newValue, editedUserId) {
  if (valueBeingChanged === "name") {
    getUserData(editedUserId).name = newValue;
    console.log("Change Successful!");
  }
  if (valueBeingChanged === "email") {
    getUserData(editedUserId).email = newValue;
    console.log("Change Successful!");
  }
  if (valueBeingChanged === "role") {
    getUserData(editedUserId).role = newValue;
    console.log("Change Successful!");
  }
  if (valueBeingChanged === "organizations") {
    getUserData(editedUserId).organizations = newValue;
    console.log("Change Successful!");
  }
  if (valueBeingChanged === "projects") {
    getUserData(editedUserId).projects = newValue;
    console.log("Change Successful!");
  }
  if (valueBeingChanged === "teams") {
    getUserData(editedUserId).teams = newValue;
    console.log("Change Successful!");
  }
  if (valueBeingChanged === "tasks") {
    getUserData(editedUserId).tasks = newValue;
    console.log("Change Successful!");
  }
  if (valueBeingChanged === "comments") {
    getUserData(editedUserId).comments = newValue;
    console.log("Change Successful!");
  }
}

function isValidId(id) {
  const databaseImplementation = require("../infra/db/mockUsers");
  return databaseImplementation.isValidId(id);
}

function deleteUser(id) {
  const databaseImplementation = require("../infra/db/mockUsers");
  databaseImplementation.deleteUser(id);
}
module.exports = { login, createUserCredentials, getUserData, searchUsersByName, setUserValue, isValidId, deleteUser };
