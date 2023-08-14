const { user } = require("../../entities/user");

let listOfUsers = [];
listOfUsers.push(new user("101", "Ryan Murphy", "ryan.murphy611@gmail.com", "Admin", "Test Org", "First Proj", "Dev Team 8", null, null));

function findUserById(id) {
  let output;
  listOfUsers.forEach((element) => {
    if (element.id === id) {
      output = element;
    } else {
      output = null;
    }
  });
  return output;
}

function searchUsersByName(name) {
  let output = [];
  listOfUsers.forEach((element) => {
    if (element.name.includes(name)) {
      output.push(element);
    }
  });
  return output;
}

function isValidId(id) {
  let output;
  listOfUsers.forEach((element) => {
    if (element.id === id) {
      output = true;
    } else {
      output = false;
    }
  });

  return output;
}
module.exports = { findUserById, searchUsersByName, isValidId };
