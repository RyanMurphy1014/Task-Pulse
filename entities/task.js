class task {
  title;
  description;
  status;
  deadline;
  commentThread;

  setStatus(statusCode) {
    if (statusCode === 0) {
      this.status = "Started";
    }
    if (statusCode === 1) {
      this.status = "Not Started";
    }
    if (statusCode === 2) {
      this.status = "Blocked";
    }
    if (statusCode === 3) {
      this.status = "Completed";
    }
  }

  constructor(title, description, deadline) {
    this.title = title;
    this.description = description;
    this.setStatus(1);
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
