//Implementation imports

const databaseImplementationCredentials = require("../infra/db/mockCredentials");
const databaseImplementationOrganizations = require("../infra/db/dbConnector");

//Credentials
function login(organizationName, username, password) {
	const attemptedLogin = databaseImplementationCredentials.login(
		organizationName,
		username,
		password
	);
	if (attemptedLogin != null) {
		return attemptedLogin;
	} else {
		return null;
	}
}

async function getOrganization(organizationName) {
	return await databaseImplementationOrganizations.getOrganization(
		organizationName
	);
}

async function getUser(id, organizationId){
    return databaseImplementationOrganizations.getUser(id, organizationId);
}

async function createUser(id, userName, email, role){
    databaseImplementationOrganizations.createUser(id, userName, email, role);
}

async function deleteUser(id, organizationId){
    databaseImplementationOrganizations.deleteUser(id, organizationId);
}

async function assignTask(userId, task){
    databaseImplementationOrganizations.assignTask(userId, task);
}

module.exports = {
	login,
	getOrganization,
    getUser,
    createUser,
    deleteUser,
    assignTask,
};
