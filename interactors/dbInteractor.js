//const databaseImplementation = require("../infra/db/mongoDbImplementation");
const databaseImplementation = require("../infra/db/mockCredentials")
function login(username, password) {
 const attemptedLogin = databaseImplementation.login(username, password);
 if(attemptedLogin != null){
    return attemptedLogin;
 }else{
    return null;
 } 
}

function createUserCredentials(username, password) {
 if(databaseImplementation.createUserCredentials(username, password) === 1){
  return 1;
 } else{
  console.log("Unable to create user.");
 }
}
module.exports = { login, createUserCredentials };
