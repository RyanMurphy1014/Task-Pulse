//==================================================
//------------------Initialization------------------
//==================================================
let canvas = document.createElement("canvas");
document.getElementById("canvasContainer").append(canvas);

let renderer = canvas.getContext("2d");

//==================================================
//---------------------Classes------------------------
//==================================================
class taskNode {
    constructor(label, data_id) {
        this.type = "taskNode";
        this.shape = "square"
        this.label = label;
        this.data = data_id;
    }

    toString() {
        return `This node is type: ${this.type} with shape: ${this.shape} - labeled ${this.label} pointing to data_id ${this.data}`
    }

}
class projectNode {
    constructor(label, data_id) {
        this.type = "projectNode";
        this.shape = "hexagon"
        this.label = label;
        this.data = data_id;
    }

    toString() {
        return `This node is type: ${this.type} with shape: ${this.shape} - labeled ${this.label} pointing to data_id ${this.data}`
    }

}
class userNode {
    constructor(label, data_id) {
        this.type = "userNode";
        this.shape = "circle"
        this.label = label;
        this.data = data_id;
    }

    toString() {
        return `This node is type: ${this.type} with shape: ${this.shape} - labeled ${this.label} pointing to data_id ${this.data}`
    }
}

//==================================================
//---------------------LOGIC------------------------
//==================================================



async function getUsers() {
    const users = await fetch("/users/all")
    return await users.json();
}

async function getTasks() {
    const tasks = await fetch("/tasks/all")
    const taskDataJson = await tasks.json();
    return taskDataJson;
}

async function getProjects() {
    const projects = await fetch("/projects/all");
    const projectsDataJson = await projects.json();
    return projectsDataJson;
}

async function aggregateData(){
    const users = await getUsers();
    const tasks = await getTasks();
    const projects = await getProjects();

    const orgData = {
        users: users,
        tasks: tasks,
        projects: projects,
    }
    return orgData;
}

async function displayOrgData(){
    console.log(await aggregateData())
}

