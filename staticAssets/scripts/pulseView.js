let canvas = document.createElement("canvas");
document.getElementById("canvasContainer").append(canvas);

let renderer = canvas.getContext("2d");

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

async function getAllUsers() {
    const allUsers = await fetch("/users/all")
    const output = await allUsers.json()
    return output;
}

async function getUserById(id) {
    const user = await fetch("/users/" + id)
    const output = await allUsers.json()
    return output;
}

async function createUserNode(...data) {
    let output;
    for (let i = 0; i < data.length; i++) {
        const newNode = new userNode(data.name, data.user_id)
        output.push(newNode)
    }
    return output;
}

