class team {
  name;
  description;
  members = [];

  //@params members is array
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }
}

module.exports = { team };
