//Implementation imports

const databaseImplementationCredentials = require("../infra/db/mockCredentials");
const databaseImplementationOrganizations = require("../infra/db/organizationModel");

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

function writeOrganizationInfo(organizationObject) {
	databaseImplementationOrganizations.writeOrganizationInfo(organizationObject);
}
module.exports = {
	login,
	getOrganization,
	writeOrganizationInfo,
};
