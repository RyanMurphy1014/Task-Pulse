const userInput = require("readline-sync");
const { task } = require("../../entities/task");
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

const loginInteractor = require("../../interactors/loginInteractor");
const dbInteractor = require("../../interactors/dbInteractor");

const { user } = require("../../entities/user");
const { team } = require("../../entities/team");
const { response } = require("express");
require("dotenv").config();

const preLoginOptions = ["Login", "Register"];
const postLoginOptions = ["Users", "Tasks", "Teams"];

//State Flags
async function main() {
	let isRunning = true;
	let viewState = "Pre Login";
	if (process.env.TEST_MODE === "true") {
		//TEST_MODE entry point
		localOrganizationArtifact = await dbInteractor.getOrganization("org");

		activeUser = localOrganizationArtifact.getUser("101");
		viewState = "Post Login";
	}
	//TODO figure out why my environment variable wont work.
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
				let userToDisplay = localOrganizationArtifact.getUser(lookupParameter);
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
			const enteredId = userInput.question(
				"Enter ID of User you want to edit: "
			);
			if (localOrganizationArtifact.isUserIdValid(enteredId) === false) {
				console.log("No users were found with that ID");
				viewState = "Post Login";
				return;
			}
			let referenceToEnteredUser = localOrganizationArtifact.getUser(enteredId);
			const userFields = ["Name", "Email", "Role", "*Delete"];
			index = userInput.keyInSelect(userFields, "Select:");
			if (index === 0) {
				referenceToEnteredUser.name = userInput.question("New Name:");
			}
			if (index === 1) {
				referenceToEnteredUser.email = userInput.question("New Email");
			}
			if (index === 2) {
				referenceToEnteredUser.role = userInput.question("New Role");
			}
			if (index === 3) {
				if (userInput.keyInYN("Are you sure you want to delete this user?")) {
					localOrganizationArtifact.deleteUser(referenceToEnteredUser.id);
				}
			}
			writeAndReadOrganizationData();
		}
	}

	function isAdmin(user) {
		if (user.role === "Admin") {
			return true;
		}
		return false;
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
			viewState = "Post Login";
		}

		function viewTeams() {
			let teamNames = localOrganizationArtifact.getTeamNames();
			let userChoice = userInput.keyInSelect(
				teamNames,
				"Select team to view: "
			);
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
			const newTeamDescripiton = userInput.question(
				"Description of new team: "
			);
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

	function tasksView() {
		viewState = "Tasks";
		const taskViewOptions = [
			"View My Tasks",
			"View Users Tasks",
			"Create Task",
		];
		let userChoice = userInput.keyInSelect(taskViewOptions, "Select:");
		if (userChoice === 0) {
			viewMyTasks();
		}
		if (userChoice === 1) {
			viewUsersTasks();
		}
		if (userChoice === 2) {
			createTask();
		}
		if (userChoice === -1) {
			viewState = "Post Login";
		}

		function viewUsersTasks() {
			userLookup();
			function userLookup() {
				let searchParameter = userInput.question(
					"Enter name or ID of a User to lookup:"
				);

				if (isANumber(searchParameter)) {
					let userToDisplay =
						localOrganizationArtifact.getUser(searchParameter);
					if (userToDisplay != null) {
						console.log(userToDisplay.displayTasks());
					} else {
						console.log(`No results for ID:${searchParameter}`);
					}
				} else {
					console.log(
						localOrganizationArtifact
							.getUserByName(searchParameter)
							.displayTasks()
					);
				}
			}
		}

		function viewMyTasks() {
			if (activeUser.tasks.length > 0) {
				let userChoiceIndex = userInput.keyInSelect(
					activeUser.tasks,
					"Select task to update status"
				);
				updateTaskStatus(activeUser.tasks[userChoiceIndex]);
			} else {
				console.log("This user has no tasks to view.");
			}
		}

		function updateTaskStatus(selectedTask) {
			let options = ["Started", "Not Started", "Blocked", "Completed"];
			if (options != -1) {
				selectedTask.setStatus(
					userInput.keyInSelect(options, "Status of task:")
				);
			}
		}

		function createTask() {
			let teamChoice = userInput.keyInSelect(
				localOrganizationArtifact.getTeamNames(),
				"What team to assign task to: "
			);
			let userChoice = userInput.keyInSelect(
				localOrganizationArtifact.teams[teamChoice].members,
				"What user to assign task to:"
			);

			const title = userInput.question("Title:");
			const description = userInput.question("Description:");
			const deadline = userInput.question("Deadiline - mm/dd/yy:");

			const taskToAdd = new task(title, description, deadline);
			localOrganizationArtifact.teams[teamChoice].members[
				userChoice
			].tasks.push(taskToAdd);
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
main();
