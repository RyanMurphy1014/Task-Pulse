const dbInteractor = require("./dbInteractor");

function login(organizationName, username, password) {
  let attemptedLogin = dbInteractor.login(organizationName, username, password);
  if (attemptedLogin != null) {
    return attemptedLogin;
  } else {
    return null;
  }
}

function createUserCredentials(username, password) {
  dbInteractor.createUserCredentials(username, password);
}

module.exports = { login, createUserCredentials };
