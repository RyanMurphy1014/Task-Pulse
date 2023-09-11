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

async function tempOnloading(orgObject) {
	const item = await Organization.create({
		organizationName: orgObject.name,
		objectData: orgObject,
	});
	console.log(
		"---------------------------------------------------------Added to db",
		item.name
	);
}

async function getOrganization(orgName) {
	const output = await Organization.findOne({
		where: { organizationName: orgName },
	});

	console.log(output.dataValues.objectData);
	return output.dataValues.objectData;
}

async function writeOrganizationInfo(orgObject) {}

module.exports = {
	testConnection,
	tempOnloading,
	getOrganization,
	writeOrganizationInfo,
};
