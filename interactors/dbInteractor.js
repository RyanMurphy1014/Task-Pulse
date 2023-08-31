//Implementation imports

const databaseImplementationCredentials = require("../infra/db/mockCredentials");
const { user } = require("../entities/user");
const databaseImplementationOrganizations = require("../infra/db/mockOrganizations");

//Credentials
function login(organizationName, username, password) {
  const attemptedLogin = databaseImplementationCredentials.login(organizationName, username, password);
  if (attemptedLogin != null) {
    return attemptedLogin;
  } else {
    return null;
  }
}

function createUserCredentials(username, password) {
  if (databaseImplementationCredentials.createUserCredentials(username, password) === 1) {
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
function getUserData(organizationName, id) {
  return databaseImplementationOrganizations.findUserById(organizationName, id);
}

/**
 *
 * @param {String} valueBeingChanged Must be specifc option defined inside this method
 * @param {String} newValue
 * @param {String} editedUserId
 */
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
  return databaseImplementationOrganizations.isValidId(id);
}

function deleteUser(id) {
  databaseImplementationUsers.deleteUser(id);
}

function getOrganization(organizationName) {
  return databaseImplementationOrganizations.getOrganization(organizationName);
}

function writeOrganizationInfo(organizationObject) {
  databaseImplementationOrganizations.writeOrganizationInfo(organizationObject);
}
module.exports = { login, createUserCredentials, getUserData, setUserValue, isValidId, deleteUser, getOrganization, writeOrganizationInfo };
