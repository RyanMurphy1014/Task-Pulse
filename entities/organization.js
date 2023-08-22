const { team } = require("./team");

class organization {
  projects = [];
  name;
  teams = [];

  constructor(name) {
    this.name = name;
  }

  getUser(id) {
    for (let i = 0; i < this.teams.length; i++) {
      for (let j = 0; j < this.teams[i].members.length; j++) {
        if (this.teams[i].members[j].id === id) {
          return this.teams[i].members[j];
        }
      }
    }
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
}

module.exports = { organization };
