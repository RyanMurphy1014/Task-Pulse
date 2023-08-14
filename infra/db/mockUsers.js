const { user } = require("../../entities/user");

let listOfUsers = [];
listOfUsers.push(new user("101", "Ryan Murphy", "ryan.murphy611@gmail.com", "Admin", "Test Org", "First Proj", "Dev Team 8", null));

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

module.exports = { findUserById };
