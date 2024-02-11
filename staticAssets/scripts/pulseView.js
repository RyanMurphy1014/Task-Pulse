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

async function nodeFactory() {
    const orgData = await aggregateData();

    const userNodes = await generateNodes(orgData.users, "user")
    const projectNodes = await generateNodes(orgData.projects, "project")
    const taskNodes = await generateNodes(orgData.tasks, "task")

    const orgNodes = {
        userNodes: userNodes,
        projectNodes: projectNodes,
        taskNodes: taskNodes,
    }
    return orgNodes

    async function aggregateData() {
        const users = await fetch("/users/all")
        const tasks = await fetch("/tasks/all")
        const projects = await fetch("/projects/all");

        const orgData = {
            users: await users.json(),
            tasks: await tasks.json(),
            projects: await projects.json(),
        }
        return orgData;
    }

    async function generateNodes(data, typeOfData) {
        let outputArray = [];
        switch (typeOfData) {
            case "user":
                for (element of data) {
                    outputArray.push(new userNode(element.name, element.user_id))
                }
                break;

            case "project":
                for (element of data) {
                    outputArray.push(new projectNode(element.name, element.project_id))
                }
                break;

            case "task":
                for (element of data) {
                    outputArray.push(new taskNode(element.name, element.task_id))
                }
                break;
        }
        return outputArray;
    }
}

nodeFactory();
