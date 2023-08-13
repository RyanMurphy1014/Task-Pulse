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

const loginInteractor = require("../../interactors/loginInteractor");

const preLoginOptions = ["Login", "Register"];
const postLoginOptions = ["Users", "Tasks", "Teams", "Projects", "Organizations", "Logout"];

//State Flags
let isRunning = true;
let viewState = "Pre Login";
while(isRunning){
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  switch(viewState){
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



process.exit();




//
function attemptLogin(){
let attemptedLogin = loginInteractor.login(userInput.question("Username: "), userInput.question("Password: "));
  if(attemptedLogin != null){
    activeUser = attemptedLogin;
    console.log("Successful Login");
    viewState = "Post Login"
  }else{
    console.log("Bad login");
  }
}

function preLogin(){
 
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
    if(index === -1){
      console.log("Goodbye!");
    isRunning = false; 
    }
}

function register(){
  loginInteractor.createUserCredentials(userInput.question("Username: "), userInput.question("Password: "));
}

function logout(){
  viewState = "Pre Login";
  activeUser = null;
}

function postLogin(){
index = userInput.keyInSelect(postLoginOptions, "Select:");


      if(index === 0){

      }
      if(index === 1){

      }
      if(index === 2){

      }
      if(index === 3){

      }
      if(index === 4){

      }
      if(index === 5){
        logout();
      }
}


function usersView(){
  const userViewOptions = [""]
}