class project {
  name;
  description;
  teamsAssigned = [];

  //@parmas task is array
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }
}

module.exports = { project };
