class organization {
  projects;
  name;
  teams;
  owner;

  //@params projects and teams are arrays
  constructor(projects, name, teams, owner) {
    this.projects = projects;
    this.name = name;
    this.teams = teams;
    this.owner = owner;
  }
}
