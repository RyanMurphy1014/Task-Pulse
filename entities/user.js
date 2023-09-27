class user {
	id;
	name;
	email;
	role;
	tasks = [];
	comments = [];

	constructor(jsonObject) {
		this.id = jsonObject.id;
		this.name = jsonObject.name;
		this.email = jsonObject.email;
		this.role = jsonObject.role;
	}

    getComments (){
        return this.comments ;
    }
    setComments (comments ){
        this.comments  = comments ;
    }
    getTasks (){
        return this.tasks ;
    }
    setTasks (tasks ){
        this.tasks  = tasks ;
    }
    getRole(){
        return this.role;
    }
    setRole(role){
        this.role = role;
    }
    getEmail(){
        return this.email;
    }
    setEmail(email){
        this.email = email;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    getId(){
        return this.id;
    }
    setId(id){
        this.id = id;
    }
	displayTasks() {
		let output = "";
		this.tasks.forEach((e) => {
			output += e + "\n";
		});
		return output;
	}

	toString() {
		let output = "id: " + this.id + "\n";
		output += "name: " + this.name + "\n";
		output += "email: " + this.email + "\n";
		output += "role: " + this.role + "\n";
		output += "------------------------------------------";
		return output;
	}
}

module.exports = { user };
