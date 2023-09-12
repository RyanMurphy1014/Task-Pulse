class user {
	id;
	name;
	email;
	role;

	tasks = [];
	comments = [];

	constructor(jsonObject) {
		this.id = jsonObject.id;
		this.name = jsonObject.name;
		this.email = jsonObject.email;
		this.role = jsonObject.role;
	}

	displayTasks() {
		let output = "";
		this.tasks.forEach((e) => {
			output += e + "\n";
		});
		return output;
	}

	toString() {
		let output = "id: " + this.id + "\n";
		output += "name: " + this.name + "\n";
		output += "email: " + this.email + "\n";
		output += "role: " + this.role + "\n";
		output += "------------------------------------------";
		return output;
	}
}

module.exports = { user };
