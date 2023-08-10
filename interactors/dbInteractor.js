const databaseImplementation = require("../infra/db/mongoDbImplementation");

function login(username, password) {
  databaseImplementation.login(username, password);
}

function createUserCredentials(username, password) {
  databaseImplementation.createUserCredentials(username, password);
}
module.exports = { login, createUserCredentials };
