const dbInteractor = require("../../interactors/dbInteractor");

function login(username, password) {
 let attemptedLogin =dbInteractor.login(username, password);
 if(attemptedLogin != null){
    return attemptedLogin; 
 }else{
  return null;
 } 
}

function createUserCredentials(username, password) {
  dbInteractor.createUserCredentials(username, password);
}

module.exports = { login, createUserCredentials };
