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
let localOrganizationArtifact;
let activeProject;

const loginInteractor = require("../../interactors/loginInteractor");
const dbInteractor = require("../../interactors/dbInteractor");
const { user } = require("../../entities/user");
const { team } = require("../../entities/team");

const preLoginOptions = ["Login", "Register"];
const postLoginOptions = ["Users", "Tasks", "Teams", "Projects"];

//State Flags
let isRunning = true;
let viewState = "Pre Login";
while (isRunning) {
  console.log(
    "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
  );
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

    default:
      preLogin();
      break;
  }
}

//End of program
process.exit();

//
function attemptLogin() {
  let organizationToLoginTo = userInput.question("Name of organization: ");
  let loginAttempt = loginInteractor.login(
    organizationToLoginTo,
    userInput.question("Username: "),
    userInput.question("Password: ")
  );
  if (loginAttempt != null) {
    localOrganizationArtifact = dbInteractor.getOrganization(
      organizationToLoginTo
    );
    activeUser = localOrganizationArtifact.getUser(loginAttempt.idOfUser);
    activeProject = localOrganizationArtifact.projects[0];
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
  loginInteractor.createUserCredentials(
    userInput.question("Username: "),
    userInput.question("Password: ")
  );
}

function logout() {
  viewState = "Pre Login";
  activeUser = null;
  localOrganizationArtifact = null;
}

function postLogin() {
  console.log(`Logged in User: ${activeUser.name}`);
  console.log(`Current Organization: ${localOrganizationArtifact.name}`);
  console.log(`Current Project: ${activeProject.name}`);
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
    let lookupParameter = userInput.question(
      "Enter name or ID of a User to lookup:"
    );

    if (isANumber(lookupParameter)) {
      let userToDisplay = dbInteractor.getUserData(
        localOrganizationArtifact.name,
        lookupParameter
      );
      if (userToDisplay != null) {
        console.log(userToDisplay.toString());
      } else {
        console.log(`No results for ID:${lookupParameter}`);
      }
    } else {
      console.log(
        localOrganizationArtifact.getUserByName(lookupParameter).toString()
      );
    }
  }

  function editUser() {
    const enteredId = userInput.question("Enter ID of User you want to edit: ");
    if (dbInteractor.isValidId(enteredId) === false) {
      console.log("No users were found with that ID");
      viewState = "Pre Login";
      return;
    }
    const userFields = [
      "Name",
      "Email",
      "Role",
      "Organizations",
      "Projects",
      "Teams",
      "Tasks",
      "Comments",
      "*Delete",
    ];
    index = userInput.keyInSelect(userFields, "Select:");
    if (index === 0) {
      dbInteractor.setUserValue(
        "name",
        userInput.question("Enter new value:"),
        enteredId
      );
    }
    if (index === 1) {
      dbInteractor.setUserValue(
        "email",
        userInput.question("Enter new value:"),
        enteredId
      );
    }
    if (index === 2) {
      dbInteractor.setUserValue(
        "role",
        userInput.question("Enter new value:"),
        enteredId
      );
    }
    if (index === 3) {
      dbInteractor.setUserValue(
        "organizations",
        userInput.question("Enter new value:"),
        enteredId
      );
    }
    if (index === 4) {
      dbInteractor.setUserValue(
        "projects",
        userInput.question("Enter new value:"),
        enteredId
      );
    }
    if (index === 5) {
      dbInteractor.setUserValue(
        "teams",
        userInput.question("Enter new value:"),
        enteredId
      );
    }
    if (index === 6) {
      dbInteractor.setUserValue(
        "tasks",
        userInput.question("Enter new value:"),
        enteredId
      );
    }
    if (index === 7) {
      dbInteractor.setUserValue(
        "comments",
        userInput.question("Enter new value:"),
        enteredId
      );
    }
    if (index === 8) {
      if (userInput.keyInYN("Are you sure you want to delete this user?:")) {
        dbInteractor.deleteUser(enteredId);
      }
    }
    writeAndReadOrganizationData();
  }
  function isANumber(input) {
    if (input.charAt(0) <= "9" && input.charAt(0) >= "0") {
      return true;
    }
    return false;
  }
}

function isAdmin(user) {
  if (user.role === "Admin") {
    return true;
  }
  return false;
}

function projectsView() {
  const projectsViewOptions = [
    "Change Project",
    "Create Project",
    "Edit Project",
  ];
  let index = userInput.keyInSelect(projectsViewOptions, "Select:");

  console.log(`Active Project: ${activeProject.name}`);
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
    let indexOfNewActiveProject = userInput.keyInSelect(
      localOrganizationArtifact.projects
    );
    if (indexOfNewActiveProject != -1) {
      activeProject =
        localOrganizationArtifact.projects[indexOfNewActiveProject];
    }
  }

  function createProject() {
    if (activeUser.role === "Admin") {
      localOrganizationArtifact.projects.push(
        new project(
          userInput.question("Name for new project:"),
          userInput.question("Description: ")
        )
      );
      activeProject =
        localOrganizationArtifact.projects[
          localOrganizationArtifact.projects.length - 1
        ];
      writeOrganizationData();
    } else {
      console.log("You do not have the required privledges");
    }
  }

  function editProject() {
    let choiceIndex = userInput.keyInSelect(
      ["Name", "Description"],
      "What would you like to change in active project:"
    );
    if (choiceIndex === 0) {
      activeProject.name = userInput.question("New name: ");
    }
    if (choiceIndex === 1) {
      activeProject.description = userInput.question("New Description: ");
    }
    writeOrganizationData();
  }
  writeAndReadOrganizationData();
}

function readOrganizationData() {
  localOrganizationArtifact = dbInteractor.getOrganization(
    localOrganizationArtifact.name
  );
}

function writeOrganizationData() {
  dbInteractor.writeOrganizationInfo(localOrganizationArtifact);
}

function writeAndReadOrganizationData() {
  writeOrganizationData();
  readOrganizationData();
}

function teamsView() {
  viewState = "Teams";
  const teamsViewUserOptions = ["View Teams", "Create Team", "Edit Team"];
  let userChoice = userInput.keyInSelect(teamsViewUserOptions, "Select: ");
  if (userChoice === 0) {
    viewTeams();
  }
  if (userChoice === 1) {
    createTeam();
  }
  if (userChoice === 2) {
    editTeam();
  }
  if (userChoice === -1) {
    viewState = postLogin();
  }

  function viewTeams() {
    let teamNames = localOrganizationArtifact.getTeamNames();
    let userChoice = userInput.keyInSelect(teamNames, "Select team to view: ");
    localOrganizationArtifact.teams.forEach((e) => {
      if (e.name === teamNames[userChoice]) {
        e.members.forEach((e) => {
          console.log(e.toString());
        });
      }
    });
  }

  function createTeam() {
    const newTeamName = userInput.question("Name of new team: ");
    const newTeamDescripiton = userInput.question("Description of new team: ");
    localOrganizationArtifact.createTeam(newTeamName, newTeamDescripiton);

    writeAndReadOrganizationData();
  }

  function editTeam() {
    let teamChoice = userInput.keyInSelect(
      localOrganizationArtifact.getTeamNames(),
      "Select team to edit: "
    );

    const selectOptions = ["Name", "Description", "Add User", "Remove User"];
    let userChoice = userInput.keyInSelect(selectOptions, "What to edit: ");
    if (userChoice === 0) {
      localOrganizationArtifact.teams[teamChoice].name =
        userInput.question("New name:");
    }
    if (userChoice === 1) {
      localOrganizationArtifact.teams[teamChoice].description =
        userInput.question("New description:");
    }
    if (userChoice === 2) {
      const userIdToAdd = userInput.question("Id of user to add:");
      if (localOrganizationArtifact.isUserIdValid(userIdToAdd)) {
        localOrganizationArtifact.teams[teamChoice].members.push(
          localOrganizationArtifact.getUser(userIdToAdd)
        );
      } else {
        console.log("That was not a valid user ID.");
      }
    }
    if (userChoice === 3) {
      let userChoice = userInput.keyInSelect(
        localOrganizationArtifact.getTeamNames(),
        "What team to remove from:"
      );
      const userList = localOrganizationArtifact.teams[userChoice].members;
      let indexToRemove = userInput.keyInSelect(
        userList,
        "What user to remove: "
      );
      localOrganizationArtifact.teams[userChoice].members.splice(
        indexToRemove,
        1
      );
    }
    writeAndReadOrganizationData();
  }
}
