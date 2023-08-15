class mockCredentials {
  username;
  password;
  linkedUser;

  constructor(username, password, linkedUser) {
    this.username = username;
    this.password = password;
    this.linkedUser = linkedUser;
  }
}

let listOfUsers = [];
listOfUsers.push(new mockCredentials("ryan", "m1234", "101"));
listOfUsers.push(new mockCredentials("kali", "k1234", "202"));

function login(username, password) {
  const loginAttempt = new mockCredentials(username, password, "0");
  const foundIndex = listOfUsers.findIndex((element) => {
    if (element.username === loginAttempt.username) {
      if (element.password === loginAttempt.password) {
        return true;
      }
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
