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

    const userNodes = await generateNodes(orgData.users, "userNode")
    const projectNodes = await generateNodes(orgData.projects, "projectNode")
    const taskNodes = await generateNodes(orgData.tasks, "taskNode")

    //Gathers processed data into an output object
    const orgNodes = { userNodes, projectNodes, taskNodes }
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
            case "userNode":
                for (element of data) {
                    generatedNodes.push(new userNode(element.name, element.user_id))
                }
                break;

            case "projectNode":
                for (element of data) {
                    generatedNodes.push(new projectNode(element.name, element.project_id))
                }
                break;

            case "taskNode":
                for (element of data) {
                    generatedNodes.push(new taskNode(element.name, element.task_id))
                }
                break;
            default:
                console.log("Hitting the default on 124")
        }
        return generatedNodes;
    }
}

//==================================================
//----------------Data Diaplay----------------------
//==================================================

(async function main() {
    const orgData = await nodeFactory();
    const nodeLayerCoordinates = getNodeCoordinateObject(350, orgData)
    drawNodeLayer(orgData.projectNodes, nodeLayerCoordinates.projectLayerCoordinates);
    drawNodeLayer(orgData.userNodes, nodeLayerCoordinates.userLayerCoordinates);
    drawNodeLayer(orgData.taskNodes, nodeLayerCoordinates.taskLayerCoordinates);


})();//IIFE

function getNodeCoordinateObject(outerRadius, orgData) {
    //Adjustment
    const taskLayerSizeRatio = 0.45;
    const projectLayerSizeRatio = 0.1;

    //output
    let nodeCoordinateObject = {
        projectLayerCoordinates: generateCoordinateObject(orgData.projectNodes, outerRadius * projectLayerSizeRatio),
        taskLayerCoordinates: generateCoordinateObject(orgData.taskNodes, outerRadius * taskLayerSizeRatio),
        userLayerCoordinates: generateCoordinateObject(orgData.userNodes, outerRadius),
    }
    return nodeCoordinateObject;

    function generateCoordinateObject(nodeList, radius) {
        let nodeCoordinates = {
            coordinates: calculateTangentialCoordinates(radius, nodeList),
            radius: radius,
        };

        return nodeCoordinates

        function calculateTangentialCoordinates(radius, nodes) {
            const angleStep = (2 * Math.PI) / nodes.length; // Calculate angle step
            const coordinates = [];

            for (let i = 0; i < nodes.length; i++) {
                const angle = angleStep * i; // Calculate angle for current object
                let x = radius * Math.cos(angle); // Calculate x coordinate
                let y = radius * Math.sin(angle); // Calculate y coordinate
                x += canvasCenter.x;
                y += canvasCenter.y;
                coordinates.push({ x, y }); // Push coordinates to array
            }

            return coordinates;
        }
    }

}


function drawNodeLayer(nodeList, coordinateObject) {
    for (let i = 0; i < nodeList.length; i++) {
        switch (nodeList[i].type) {
            case "userNode":

                //Adjustment
                const userNodeSize = 35;

                ctx.stroke();
                ctx.beginPath();
                ctx.lineWidth = 6;
                ctx.arc(coordinateObject.coordinates[i].x, coordinateObject.coordinates[i].y, userNodeSize, 0, Math.PI * 2, false)
                ctx.stroke();
                ctx.font = '18px mono'
                ctx.textAlign = 'center';
                ctx.textBaseline = 'center'
                //Need to find way to vertically align text
                ctx.fillText(nodeList[i].label, coordinateObject.coordinates[i].x, coordinateObject.coordinates[i].y + userNodeSize + 25)


                break;
            case "taskNode":
                //Adjustment
                const taskNodeSize = 60;

                ctx.lineWidth = 6;
                ctx.rect(coordinateObject.coordinates[i].x, coordinateObject.coordinates[i].y, taskNodeSize, taskNodeSize)
                ctx.stroke();
                ctx.font = '18px mono'
                ctx.textAlign = 'center';
                ctx.textBaseline = 'center'
                ctx.fillText(nodeList[i].label, coordinateObject.coordinates[i].x + 50, coordinateObject.coordinates[i].y + (taskNodeSize + 25))
                ctx.stroke();
                break;

            case "projectNode":
                //Adjustment
                const projectNodeSize = 50;
                // Calculate the coordinates of the hexagon vertices
                const angleStep = (Math.PI / 180) * 60; // 60 degrees in radians
                const points = [];
                for (let j = 0; j < 6; j++) {
                    const angle = angleStep * j;
                    const x = coordinateObject.coordinates[i].x + projectNodeSize * Math.cos(angle);
                    const y = coordinateObject.coordinates[i].y + projectNodeSize * Math.sin(angle);
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
                ctx.textAlign = 'center';
                ctx.textBaseline = 'center'
                ctx.fillText(nodeList[i].label, coordinateObject.coordinates[i].x, coordinateObject.coordinates[i].y + projectNodeSize + 15) //Node size is added to push label
                ctx.stroke();                                                        //Below shape
                break;
            default:
                console.log("we hit the default - switch checks node type")
                break;
        }


    }
}
