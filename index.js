require("dotenv").config();

if (process.env.OUTPUT === "cli") {
	console.log(
		"Task Pulse is starting up in Command Line Interface configuration."
	);

	const sequelizeTest = require("./infra/db/organizationModel");
	//sequelizeTest.testConnection();

	//const onloader = require("./infra/db/mockOrganizations");
	//onloader.onloadData();

	const cliUI = require("./infra/cli/clUi.js");
}
