class project {
  name;
  description;
  teamsAssigned = [];

  //@parmas task is array
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }

  toString() {
    return this.name;
  }
}

module.exports = { project };
