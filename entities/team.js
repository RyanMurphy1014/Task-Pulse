class team {
  name;
  description;
  members = [];

  //@params members is array
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }

  toString(){
    let outputString = "";
    outputString += `Name: ${this.name}\n`;
    outputString += `Description: ${this.description}\n`;
    this.members.forEach(element => {
      outputString += (element + "\n");
    })
    return outputString;
  }
}

module.exports = { team };
