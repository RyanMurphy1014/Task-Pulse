class user {
  id;
  name;
  email;
  role;

  organizations;
  projects;
  teams;
  comments;



  

  constructor(id, name, email, role, organizations, projects, teams, comments){
    this.id = id ;
    this.name = name ;
    this.email = email ;
    this.role = role ;

    this.organizations = organizations ;
    this.projects = projects ;
    this.teams = teams ;
    this.comments = comments ;

  }  
}



module.exports = {user};