const { Sequelize, DataTypes } = require("sequelize");

let promises = [];

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
		await sequelize.sync({ force: true });
	} catch (error) {
		console.log(error);
	}
}

async function tempOnloading(orgObject) {
	console.log(`=----=-=-=--=--= ${JSON.stringify(orgObject)}`);
	const item = await Organization.create({
		organizationName: orgObject.name,
		objectData: orgObject,
	});
}

async function getOrganization(orgName) {
	const output = await Organization.findOne({
		where: { organizationName: orgName },
	});

	console.log(output.dataValues.objectData);
	return output.dataValues.objectData;
}

async function writeOrganizationInfo(orgObject) {
	const input = await Organization.findOne({
		where: { organizationName: orgObject.name },
	});
	console.log(input);
	input.objectData = orgObject;
	await input.save();
	console.log("Got tis far");
}

module.exports = {
	testConnection,
	tempOnloading,
	getOrganization,
	writeOrganizationInfo,
};
