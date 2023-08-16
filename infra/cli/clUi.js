const userInput = require("readline-sync");
// prettier-ignore
function displayTitle(){
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
 console.log("      _____                    _____                    _____                    _____                               ");
 console.log("     /\\    \\                  /\\    \\                  /\\    \\                  /\\    \\                              ");
 console.log("    /::\\    \\                /::\\    \\                /::\\    \\                /::\\____\\                             ");
 console.log("    \\:::\\    \\              /::::\\    \\              /::::\\    \\              /:::/    /                             ");
 console.log("     \\:::\\    \\            /::::::\\    \\            /::::::\\    \\            /:::/    /                              ");
 console.log("      \\:::\\    \\          /:::/\\:::\\    \\          /:::/\\:::\\    \\          /:::/    /                               ");
 console.log("       \\:::\\    \\        /:::/__\\:::\\    \\        /:::/__\\:::\\    \\        /:::/____/                                ");
 console.log("       /::::\\    \\      /::::\\   \\:::\\    \\       \\:::\\   \\:::\\    \\      /::::\\    \\                                ");
 console.log("      /::::::\\    \\    /::::::\\   \\:::\\    \\    ___\\:::\\   \\:::\\    \\    /::::::\\____\\________                       ");
 console.log("     /:::/\\:::\\    \\  /:::/\\:::\\   \\:::\\    \\  /\\   \\:::\\   \\:::\\    \\  /:::/\\:::::::::::\\    \\                      ");
 console.log("    /:::/  \\:::\\____\\/:::/  \\:::\\   \\:::\\____\\/::\\   \\:::\\   \\:::\\____\\/:::/  |:::::::::::\\____\\                     ");
 console.log("   /:::/    \\::/    /\\::/    \\:::\\  /:::/    /\\:::\\   \\:::\\   \\::/    /\\::/   |::|~~~|~~~~~                          ");
 console.log("  /:::/    / \\/____/  \\/____/ \\:::\\/:::/    /  \\:::\\   \\:::\\   \\/____/  \\/____|::|   |                               ");
 console.log(" /:::/    /                    \\::::::/    /    \\:::\\   \\:::\\    \\            |::|   |                               ");
 console.log("/:::/    /                      \\::::/    /      \\:::\\   \\:::\\____\\           |::|   |                               ");
 console.log("\\::/    /                       /:::/    /        \\:::\\  /:::/    /           |::|   |                               ");
 console.log(" \\/____/                       /:::/    /          \\:::\\/:::/    /            |::|   |                               ");
 console.log("                              /:::/    /            \\::::::/    /             |::|   |                               ");
 console.log("                             /:::/    /              \\::::/    /              \\::|   |                               ");
 console.log("                             \\::/    /                \\::/    /                \\:|   |                               ");
 console.log("                              \\/____/                  \\/____/                  \\|___|                               ");
 console.log("                                                                                                                     ");
 console.log("          _____                    _____                    _____            _____                    _____          ");
 console.log("         /\\    \\                  /\\    \\                  /\\    \\          /\\    \\                  /\\    \\         ");
 console.log("        /::\\    \\                /::\\____\\                /::\\____\\        /::\\    \\                /::\\    \\        ");
 console.log("       /::::\\    \\              /:::/    /               /:::/    /       /::::\\    \\              /::::\\    \\       ");
 console.log("      /::::::\\    \\            /:::/    /               /:::/    /       /::::::\\    \\            /::::::\\    \\      ");
 console.log("     /:::/\\:::\\    \\          /:::/    /               /:::/    /       /:::/\\:::\\    \\          /:::/\\:::\\    \\     ");
 console.log("    /:::/__\\:::\\    \\        /:::/    /               /:::/    /       /:::/__\\:::\\    \\        /:::/__\\:::\\    \\    ");
 console.log("   /::::\\   \\:::\\    \\      /:::/    /               /:::/    /        \\:::\\   \\:::\\    \\      /::::\\   \\:::\\    \\   ");
 console.log("  /::::::\\   \\:::\\    \\    /:::/    /      _____    /:::/    /       ___\\:::\\   \\:::\\    \\    /::::::\\   \\:::\\    \\  ");
 console.log(" /:::/\\:::\\   \\:::\\____\\  /:::/____/      /\\    \\  /:::/    /       /\\   \\:::\\   \\:::\\    \\  /:::/\\:::\\   \\:::\\    \\ ");
 console.log("/:::/  \\:::\\   \\:::|    ||:::|    /      /::\\____\\/:::/____/       /::\\   \\:::\\   \\:::\\____\\/:::/__\\:::\\   \\:::\\____\\ ");
 console.log("\\::/    \\:::\\  /:::|____||:::|____\\     /:::/    /\\:::\\    \\       \\:::\\   \\:::\\   \\::/    /\\:::\\   \\:::\\   \\::/    /");
 console.log(" \\/_____/\\:::\\/:::/    /  \\:::\\    \\   /:::/    /  \\:::\\    \\       \\:::\\   \\:::\\   \\/____/  \\:::\\   \\:::\\   \\/____/ ");
 console.log("          \\::::::/    /    \\:::\\    \\ /:::/    /    \\:::\\    \\       \\:::\\   \\:::\\    \\       \\:::\\   \\:::\\    \\     ");
 console.log("           \\::::/    /      \\:::\\    /:::/    /      \\:::\\    \\       \\:::\\   \\:::\\____\\       \\:::\\   \\:::\\____\\    ");
 console.log("            \\::/____/        \\:::\\__/:::/    /        \\:::\\    \\       \\:::\\  /:::/    /        \\:::\\   \\::/    /    ");
 console.log("             ~~               \\::::::::/    /          \\:::\\    \\       \\:::\\/:::/    /          \\:::\\   \\/____/     ");
 console.log("                               \\::::::/    /            \\:::\\    \\       \\::::::/    /            \\:::\\    \\         ");
 console.log("                                \\::::/    /              \\:::\\____\\       \\::::/    /              \\:::\\____\\        ");
 console.log("                                 \\::/____/                \\::/    /        \\::/    /                \\::/    /        ");
 console.log("                                  ~~                       \\/____/          \\/____/                  \\/____/         ");
 console.log("                                                                                                                     ");
}

displayTitle();

let activeUser;
let activeOrganization;
let activeProject;

const loginInteractor = require("../../interactors/loginInteractor");
const dbInteractor = require("../../interactors/dbInteractor");
const { user } = require("../../entities/user");

const preLoginOptions = ["Login", "Register"];
const postLoginOptions = ["Users", "Tasks", "Teams", "Projects", "Organizations"];

//State Flags
let isRunning = true;
let viewState = "Pre Login";
while (isRunning) {
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  switch (viewState) {
    //Select a view state to go to the correct submenu. Changes occur after while loop reiterates.

    case "Pre Login":
      preLogin();

      break;
    case "Post Login":
      postLogin();
      break;

    case "Users":
      usersView();
      break;

    case "Tasks":
      tasksView();
      break;

    case "Teams":
      teamsView();
      break;

    case "Projects":
      projectsView();
      break;

    case "Organizations":
      organizationsView();
      break;

    default:
      preLogin();
      break;
  }
}

//End of program
process.exit();

//
function attemptLogin() {
  let attemptedLogin = loginInteractor.login(userInput.question("Username: "), userInput.question("Password: "));
  if (attemptedLogin != null) {
    activeUser = dbInteractor.getUserData(attemptedLogin.linkedUser);
    activeOrganization = activeUser.organizations[0];
    activeProject = activeUser.projects[0];
    console.log("Successful Login");
    viewState = "Post Login";
  } else {
    console.log("Bad login");
  }
}

function preLogin() {
  let index = userInput.keyInSelect(preLoginOptions, "Select:");
  //Login
  if (index === 0) {
    attemptLogin();
  }

  //Register
  if (index === 1) {
    register();
  }
  //Leave
  if (index === -1) {
    console.log("Goodbye!");
    isRunning = false;
  }
}

function register() {
  loginInteractor.createUserCredentials(userInput.question("Username: "), userInput.question("Password: "));
}

function logout() {
  viewState = "Pre Login";
  activeUser = null;
  activeOrganization = null;
}

function postLogin() {
  console.log(`Logged in User: ${activeUser.name}`);
  console.log(`Current Organization: ${activeOrganization}`);
  console.log(`Current Project: ${activeProject}`);
  index = userInput.keyInSelect(postLoginOptions, "Select:");

  if (index === 0) {
    viewState = "Users";
  }
  if (index === 1) {
    viewState = "Tasks";
  }
  if (index === 2) {
    viewState = "Teams";
  }
  if (index === 3) {
    viewState = "Projects";
  }
  if (index === 4) {
    viewState = "Organizations";
  }
  if (index === -1) {
    logout();
  }
}

function usersView() {
  const userViewOptions = ["Lookup", "Edit"];

  let index = userInput.keyInSelect(userViewOptions, "Select:");

  if (index === 0) {
    userLookup();
  }
  if (index === 1) {
    editUser();
  }
  if (index === -1) {
    viewState = "Post Login";
  }

  //Nested helper functions
  function userLookup() {
    let lookupParameter = userInput.question("Enter name or ID of a User to lookup:");

    if (isANumber(lookupParameter)) {
      if (dbInteractor.getUserData(lookupParameter) != null) {
        console.log(dbInteractor.getUserData(lookupParameter).toString());
      } else {
        console.log(`No results for ID:${lookupParameter}`);
      }
    } else {
      console.log(dbInteractor.searchUsersByName(lookupParameter).toString());
    }
  }

  function editUser() {
    const enteredId = userInput.question("Enter ID of User you want to edit: ");
    if (dbInteractor.isValidId(enteredId) === false) {
      console.log("No users were found with that ID");
      viewState = "Pre Login";
      return;
    }
    const userFields = ["Name", "Email", "Role", "Organizations", "Projects", "Teams", "Tasks", "Comments", "*Delete"];
    index = userInput.keyInSelect(userFields, "Select:");
    if (index === 0) {
      dbInteractor.setUserValue("name", userInput.question("Enter new value:"), enteredId);
    }
    if (index === 1) {
      dbInteractor.setUserValue("email", userInput.question("Enter new value:"), enteredId);
    }
    if (index === 2) {
      dbInteractor.setUserValue("role", userInput.question("Enter new value:"), enteredId);
    }
    if (index === 3) {
      dbInteractor.setUserValue("organizations", userInput.question("Enter new value:"), enteredId);
    }
    if (index === 4) {
      dbInteractor.setUserValue("projects", userInput.question("Enter new value:"), enteredId);
    }
    if (index === 5) {
      dbInteractor.setUserValue("teams", userInput.question("Enter new value:"), enteredId);
    }
    if (index === 6) {
      dbInteractor.setUserValue("tasks", userInput.question("Enter new value:"), enteredId);
    }
    if (index === 7) {
      dbInteractor.setUserValue("comments", userInput.question("Enter new value:"), enteredId);
    }
    if (index === 8) {
      if (userInput.keyInYN("Are you sure you want to delete this user?:")) {
        dbInteractor.deleteUser(enteredId);
      }
    }
  }
  function isANumber(input) {
    if (input.charAt(0) <= "9" && input.charAt(0) >= "0") {
      return true;
    }
    return false;
  }
}

function organizationsView() {
  console.log("Your organizations: " + formatOrganizations());

  const organizationsViewOptions = ["Change Active Organization", "Edit Active Organization", "Create Organization"];
  let index = userInput.keyInSelect(organizationsViewOptions, "Select:");
  if (index === 0) {
    changeOrganization();
  }
  if (index === 1) {
    editOrganization();
  }
  if (index === 2) {
    createOrganization();
  }

  viewState = "Post Login";

  //Under construction functions
  function changeOrganization() {
    let newActiveOrganization = userInput.keyInSelect(activeUser.organizations, "Select:");
    activeOrganization = activeUser.organizations[newActiveOrganization];
  }
  function editOrganization() {
    let activeOrgPlacehodler = getActiveOrgIndex();
    activeUser.organizations[getActiveOrgIndex()] = userInput.question("Enter new name for organization: ");
    dbInteractor.setUserValue("organizations", activeUser.organizations, activeUser.id);
    activeOrganization = activeUser.organizations[activeOrgPlacehodler];
  }
  function createOrganization() {
    activeUser.organizations.push(userInput.question("Enter new name for organization: "));
    dbInteractor.setUserValue("organizations", activeUser.organizations, activeUser.id);
    activeOrganization = activeUser.organizations[activeUser.organizations.length - 1];
  }

  function getActiveOrgIndex() {
    return activeUser.organizations.indexOf(activeOrganization);
  }
  function formatOrganizations() {
    let outputString = "";
    const activeIndex = getActiveOrgIndex();
    for (let i = 0; i < activeUser.organizations.length; i++) {
      if (i === activeIndex) {
        outputString += "[" + activeUser.organizations[i] + "] ";
      } else {
        outputString += activeUser.organizations[i];
      }
    }
    return outputString;
  }
}

function isAdmin(user) {
  if (user.role === "Admin") {
    return true;
  }
  return false;
}

function projectsView() {
  const projectsViewOptions = ["Change Project", "Create Project", "Edit Project"];
  let index = userInput.keyInSelect(projectsViewOptions, "Select:");

  console.log(`Active Project: ${activeProject}`);
  if (index === 0) {
    changeProject();
  }
  if (index === 1) {
    createProject();
  }
  if (index === 2) {
    editProject();
  }

  viewState = "Post Login";

  function changeProject() {
    let newActiveProject = userInput.keyInSelect(activeUser.projects);
    activeProject = activeUser.projects[newActiveProject];
  }

  function createProject() {
    activeUser.projects.push(userInput.question("Enter name for new project:"));
    dbInteractor.setUserValue("projects", activeUser.projects, activeUser.id);
    activeProject = activeUser.projects[activeUser.projects.length - 1];
  }

  function editProject() {}
}
