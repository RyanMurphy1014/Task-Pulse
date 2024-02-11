//==================================================
//------------------Initialization------------------
//==================================================
let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d");

const size = document.getElementById("canvasContainer").offsetWidth
canvas.style.width = `${size}px`
canvas.style.height = `${size}px`

const scale = window.devicePixelRatio
canvas.width = Math.floor(size * scale)
canvas.height = Math.floor(size * scale)

ctx.scale(scale, scale)

let canvasCenter = {
    x: canvas.width / 2,
    y: canvas.height / 2,
}

document.getElementById("canvasContainer").append(canvas);


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
//----------------Data Aggregation------------------
//==================================================

async function nodeFactory() {
    const orgData = await aggregateData();

    const userNodes = await generateNodes(orgData.users, "user")
    const projectNodes = await generateNodes(orgData.projects, "project")
    const taskNodes = await generateNodes(orgData.tasks, "task")

    //Gathers processed data into an output object
    const orgNodes = {
        userNodes: userNodes,
        projectNodes: projectNodes,
        taskNodes: taskNodes,
    }
    return orgNodes

    //Helper functions
    async function aggregateData() {
        const users = await fetch("/users/all")
        const tasks = await fetch("/tasks/all")
        const projects = await fetch("/projects/all");

        const fetchedData = {
            users: await users.json(),
            tasks: await tasks.json(),
            projects: await projects.json(),
        }
        return fetchedData;
    }

    async function generateNodes(data, typeOfData) {
        let generatedNodes = [];
        switch (typeOfData) {
            case "user":
                for (element of data) {
                    generatedNodes.push(new userNode(element.name, element.user_id))
                }
                break;

            case "project":
                for (element of data) {
                    generatedNodes.push(new projectNode(element.name, element.project_id))
                }
                break;

            case "task":
                for (element of data) {
                    generatedNodes.push(new taskNode(element.name, element.task_id))
                }
                break;
        }
        return generatedNodes;
    }
}

//==================================================
//----------------Data Diaplay----------------------
//==================================================

(async function main() {
    const orgData = await nodeFactory();
    drawNode(orgData.userNodes[0]);
    drawNode(orgData.taskNodes[0])
    drawNode(orgData.projectNodes[0])

})();

async function drawNode(node) {
    switch (node.type) {
        case "userNode":
            //Temporary offset values TODO delete this value
            const offset = 200;

            ctx.stroke();
            ctx.beginPath();
            ctx.lineWidth = 6;
            ctx.arc(canvasCenter.x + offset, canvasCenter.y + offset, 50, 0, Math.PI * 2, false)
            ctx.stroke();
            ctx.font = '18px mono'
            //Need to find way to vertically align text
            ctx.fillText(node.label, canvasCenter.x - 45 + offset, canvasCenter.y + 70 + offset)


            break;
        case "taskNode":
            //Temporary offset
            const taskOffset = 300;

            ctx.lineWidth = 6;
            ctx.rect(canvasCenter.x - taskOffset, canvasCenter.y - taskOffset, 100, 100)
            ctx.stroke();
            ctx.font = '18px mono'
            ctx.fillText(node.label, canvasCenter.x - 55 - taskOffset, canvasCenter.y + 125 - taskOffset)
            ctx.stroke();
            break;

        case "projectNode":
            const nodeSize = 75;

            // Calculate the coordinates of the hexagon vertices
            const angleStep = (Math.PI / 180) * 60; // 60 degrees in radians
            const points = [];
            for (let i = 0; i < 6; i++) {
                const angle = angleStep * i;
                const x = canvasCenter.x + nodeSize * Math.cos(angle);
                const y = canvasCenter.y + nodeSize * Math.sin(angle);
                points.push({ x, y });
            }

            // Draw the hexagon
            ctx.beginPath();
            ctx.moveTo(points[0].x, points[0].y);
            for (let i = 1; i < points.length; i++) {
                ctx.lineTo(points[i].x, points[i].y);
            }
            ctx.closePath();
            ctx.stroke();

            ctx.font = '18px mono'
            ctx.fillText(node.label, canvasCenter.x - 85, canvasCenter.y + nodeSize + 10)
            ctx.stroke();
            break;
        default:
            console.log("we hit the default")
            break;
    }
}
