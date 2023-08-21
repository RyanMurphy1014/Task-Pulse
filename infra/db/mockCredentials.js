class mockCredentials {
  organizationName;
  username;
  password;
  idOfUser;

  constructor(organizationName, username, password, linkedUser) {
    this.organizationName = organizationName;
    this.username = username;
    this.password = password;
    this.idOfUser = linkedUser;
  }
}

let listOfUsers = [];
listOfUsers.push(new mockCredentials("Backcountry", "ryan", "m1234", "101"));
listOfUsers.push(new mockCredentials("Backcountry", "kali", "k1234", "202"));

function login(organizationName, username, password) {
  const foundIndex = listOfUsers.findIndex((element) => {
    if (element.organizationName === organizationName && element.username === username && element.password === password) {
      return true;
    } else {
      return false;
    }
  });

  if (foundIndex != -1) {
    return listOfUsers[foundIndex];
  } else {
    return null;
  }
}

function createUserCredentials(username, password) {
  listOfUsers.push(new mockCredentials(username, password));
  return 1;
}
module.exports = { login, createUserCredentials };
