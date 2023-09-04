const { organization } = require("../../entities/organization");
const { team } = require("../../entities/team");
const { user } = require("../../entities/user");

let organizations = [];
//Backcountry
let backcountry = new organization("org");


let defaultTeam = new team("Default Team", "Landing position");
defaultTeam.members.push(
  new user("101", "Ryan Murphy", "ryan.murphy611@gmail.com", "Admin")
);
defaultTeam.members.push(
  new user("202", "Kali Murphy", "kali.murphy611@gmail.com", "Admin")
);

backcountry.teams.push(defaultTeam);
organizations.push(backcountry);

function getOrganization(organizationName) {
  return organizations[getIdexInOrgList(organizationName)];
}

function findUserById(organizationName, id) {
  return organizations[getIdexInOrgList(organizationName)].getUser(id);
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

module.exports = { getOrganization, findUserById, writeOrganizationInfo };
