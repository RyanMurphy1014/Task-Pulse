const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("taskpulse", "admin", "Asdfqwer123$", {
	timestamp: false,
	dialect: "mysql",
});

const Organization = sequelize.define(
	"Organization",
	{
		organizationName: {
			type: DataTypes.STRING,
			unique: true,
		},
		objectData: {
			type: DataTypes.JSON,
		},
	},
	{
		timestamps: false,
	}
);

async function testConnection() {
	try {
		await sequelize.authenticate();
		console.log("Good connection");
		await sequelize.sync();
	} catch (error) {
		console.log(error);
	}
}

function tempOnloading(orgObject) {
	Organization.create({
		organizationName: orgObject.name,
		objectData: orgObject,
	});
}

module.exports = { testConnection, tempOnloading };
