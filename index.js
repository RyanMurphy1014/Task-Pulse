require("dotenv").config();
async function main() {
    if (process.env.OUTPUT === "cli") {
        console.log(
            "Task Pulse is starting up in Command Line Interface configuration."
        );

        const cliUI = require("./infra/cli/clUi.js");
    }
}
main();
