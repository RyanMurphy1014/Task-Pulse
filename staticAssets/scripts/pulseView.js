//==================================================
//---------------------Constants------------------------
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
    console.log(await users.json())
    return users;
}

getUsers()

