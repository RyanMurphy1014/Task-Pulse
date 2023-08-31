class task {
  title;
  description;
  status;
  deadline;
  commentThread;

  setStatus(statusCode) {
    if (statusCode === 1) {
      return "Started";
    }
    if (statusCode === 2) {
      return "Not Started";
    }
    if (statusCode === 3) {
      return "Blocked";
    }
    if (statusCode === 4) {
      return "Completed";
    }
  }

  constructor(title, description, deadline) {
    this.title = title;
    this.description = description;
    this.status = this.setStatus(2);
    this.deadline = deadline;
  }

  toString() {
    let output = "";
    output += `Title: ${this.title} \n`;
    output += `Descripiton: ${this.description}\n`;
    output += `Status: ${this.status}\n`;
    output += `Deadline: ${this.deadline}\n`;
    output += "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~";
    return output;
  }
}
module.exports = { task };
