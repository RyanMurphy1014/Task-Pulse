const dbInteractor = require("../../interactors/dbInteractor");

function login(username, password) {
  dbInteractor.login(username, password);
}

function createUserCredentials(username, password) {
  dbInteractor.createUserCredentials(username, password);
}

module.exports = { login, createUserCredentials };
