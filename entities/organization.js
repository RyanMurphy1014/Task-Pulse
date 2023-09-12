const { parse } = require("dotenv");
const { team } = require("./team");

class organization {
	name;
	teams = [];

	constructor(jsonObject) {
		this.name = jsonObject.name;
		this.teams = jsonObject.teams;
	}

	getUser(id) {
		let output = null;
		for (let i = 0; i < this.teams.length; i++) {
			for (let j = 0; j < this.teams[i].members.length; j++) {
				if (this.teams[i].members[j].id === id) {
					output = this.teams[i].members[j];
				}
			}
		}
		return output;
	}

	isUserIdValid(id) {
		let output = false;
		this.teams.forEach((e) => {
			e.members.forEach((e) => {
				if (e.id === id) {
					output = true;
				}
			});
		});
		return output;
	}

	getUserByName(name) {
		for (let i = 0; i < this.teams.length; i++) {
			for (let j = 0; j < this.teams[i].members.length; j++) {
				if (
					this.teams[i].members[j].name
						.toLowerCase()
						.includes(name.toLowerCase())
				) {
					return this.teams[i].members[j];
				}
			}
		}
		console.log("Could not find a user with that name");
	}

	createTeam(name, description) {
		this.teams.push(new team(name, description));
	}

	/**
	 *
	 * @param {number} index - If index is -1 then it ends to end of members array
	 * @param {User} user
	 */
	addTeamMember(index, user) {
		if (index == -1) {
			this.teams[this.teams.length - 1].members.push(user);
		} else {
			this.teams[index].members.push(user);
		}
	}

	getTeamNames() {
		const teamNames = [];
		this.teams.forEach((element) => {
			teamNames.push(element.name);
		});
		return teamNames;
	}

	deleteUser(id) {
		let isCompletelyRemoved = false;
		while (isCompletelyRemoved === false) {
			let wasAUserDeleted = false;
			for (var i = 0; i < this.teams.length; i++) {
				for (let j = 0; j < this.teams[i].members.length; j++) {
					if (this.teams[i].members[j].id === id) {
						wasAUserDeleted = true;
						this.teams[i].members.splice(j, 1);
					}
				}
			}

			if (wasAUserDeleted === false && i === this.teams.length) {
				//Runs a whole check before checking if a user was deleted
				isCompletelyRemoved = true;
			}
		}
	}
}

module.exports = { organization };
