class user {
  id;
  name;
  email;
  role;

  organizations = [];
  projects = [];
  teams = [];
  tasks = [];
  comments = [];

  constructor(id, name, email, role, organizations, projects, teams, tasks, comments) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = role;

    this.organizations = organizations;
    this.projects = projects;
    this.teams = teams;
    this.tasks = tasks;
    this.comments = comments;
  }

  toString() {
    let output = "id: " + this.id + "\n";
    output += "name: " + this.name + "\n";
    output += "email: " + this.email + "\n";
    output += "role: " + this.role + "\n";
    output += "organizations: " + this.organizations + "\n";
    output += "projects: " + this.projects + "\n";
    output += "teams: " + this.teams + "\n";
    output += "tasks: " + this.tasks + "\n";
    output += "comments: " + this.comments;
    return output;
  }
}

module.exports = { user };
