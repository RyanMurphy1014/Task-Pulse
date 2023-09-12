const { organization } = require("../../entities/organization");
const { team } = require("../../entities/team");
const { user } = require("../../entities/user");

let organizations = [];
//Backcountry
let backcountry = new organization();
backcountry.name = "org7";

let defaultTeam = new team("Default Team", "Landing position");
defaultTeam.members.push(
	new user("101", "Ryan Murphy", "ryan.murphy611@gmail.com", "Admin")
);
defaultTeam.members.push(
	new user("202", "Kali Murphy", "kali.murphy611@gmail.com", "Admin")
);

backcountry.teams.push(defaultTeam);
organizations.push(backcountry);
console.log(`--------------------------------------------${backcountry}`);

function getOrganization(organizationName) {
	return organizations[getIdexInOrgList(organizationName)];
}

function getIdexInOrgList(organizationName) {
	const index = organizations.findIndex((element) => {
		if (element.name === organizationName) {
			return true;
		} else {
			return false;
		}
	});
	return index;
}

function writeOrganizationInfo(organizationObject) {
	organizations[getIdexInOrgList(organizationObject.name)] = organizationObject;
}

function onloadData() {
	const seqlizeOnboarder = require("../db/organizationModel");
	console.log(
		`=-=-=-=-=-=-=-=-=- From mockO backcountry: ${JSON.stringify(backcountry)}`
	);
	seqlizeOnboarder.tempOnloading(backcountry);
}

module.exports = {
	getOrganization,
	writeOrganizationInfo,
	onloadData,
	backcountry,
};
