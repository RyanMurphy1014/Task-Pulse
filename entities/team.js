class team {
  name;
  description;
  members = [];

  //@params members is array
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }

    getMembers (){
        return this.members ;
    }
    setMembers (members ){
        this.members  = members ;
    }
    getDescription(){
        return this.description;
    }
    setDescription(description){
        this.description = description;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
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
