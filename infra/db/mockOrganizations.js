const { organization } = require("../../entities/organization");
const { project } = require("../../entities/project");
const { team } = require("../../entities/team");
const { user } = require("../../entities/user");

let organizations = [];
//Backcountry
let backcountry = new organization("Backcountry");

let defaultProject = new project("Default Project", "Base project to mock test");
backcountry.projects.push(defaultProject);

let defaultTeam = new team("Default Team", "Landing position");
defaultTeam.members.push(new user("101", "Ryan Murphy", "ryan.murphy611@gmail.com", "Admin"));

backcountry.teams.push(defaultTeam);
organizations.push(backcountry);

function getOrganization(organizationName) {
  const index = organizations.findIndex((element) => {
    if (element.name === organizationName) {
      return true;
    } else {
      return false;
    }
  });
  return organizations[index];
}

module.exports = { getOrganization };
