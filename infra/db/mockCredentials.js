class mockCredentials{
    username;
    password;

    constructor(username, password){
        this.username = username;
        this.password = password;
    }
}

let listOfUsers = [];
listOfUsers.push(new mockCredentials("ryan", "m1234"));
listOfUsers.push(new mockCredentials("kali", "k1234"));

function login(username, password){
    const loginAttempt = new mockCredentials(username, password);
    const foundIndex = listOfUsers.findIndex((element) => JSON.stringify(loginAttempt) === JSON.stringify(element));

    if(foundIndex != -1){
        return listOfUsers[foundIndex];
    }else{
        return null;
    }
    
}

function createUserCredentials(username, password) {
 listOfUsers.push(new mockCredentials(username, password));
 return 1; 
}
module.exports = {login, createUserCredentials}