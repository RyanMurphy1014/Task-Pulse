const { user } = require("../../entities/user");
const { getUserData } = require("../../interactors/dbInteractor");

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
    if (element.name.toLowerCase().includes(name.toLowerCase())) {
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

function deleteUser(id) {
  for (let i = 0; i < listOfUsers.length; i++) {
    if (listOfUsers[i].id === id) {
      listOfUsers.splice(i, 1);
    }
  }
  console.log(`User ID:${id} has been successfully removed.`);
}

module.exports = { findUserById, searchUsersByName, isValidId, deleteUser };
