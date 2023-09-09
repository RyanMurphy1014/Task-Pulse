//Implementation imports

const sequelizeTest = require("../infra/db/organizationModel");
sequelizeTest.testConnection();
const databaseImplementationCredentials = require("../infra/db/mockCredentials");
const databaseImplementationOrganizations = require("../infra/db/mockOrganizations");

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

function isValidId(id) {
	return databaseImplementationOrganizations.isValidId(id);
}

/**
 *
 * @param {String} organizationName Name property of an organization to lookup
 * @returns Organization object from database
 */
function getOrganization(organizationName) {
	return databaseImplementationOrganizations.getOrganization(organizationName);
}

function writeOrganizationInfo(organizationObject) {
	databaseImplementationOrganizations.writeOrganizationInfo(organizationObject);
}
module.exports = {
	login,
	isValidId,
	getOrganization,
	writeOrganizationInfo,
};
