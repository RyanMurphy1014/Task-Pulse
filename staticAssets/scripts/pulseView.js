//==================================================
//------------------Initialization------------------
//==================================================
let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d");

const widthSize = document.getElementById("canvasContainer").offsetWidth
const heightSize = document.getElementById("canvasContainer").offsetHeight
canvas.style.width = `${widthSize}px`
canvas.style.height = `${heightSize}px`


const scale = window.devicePixelRatio * 1.4; //Magic number to make scaling correct on my display
canvas.width = Math.floor(widthSize * scale)
canvas.height = Math.floor(heightSize * scale)

let canvasCenter = {
    x: canvas.width / 2,
    y: canvas.height / 2,
}

//Variables for panning
let isPanning = false;
let startPanX;
let startPanY;
let translateX = 0;
let translateY = 0;

canvas.addEventListener('mousedown', (event) => {
    isPanning = true;
    startPanX = event.clientX;
    startPanY = event.clientY;
    canvas.style.cursor = "grabbing";

})

canvas.addEventListener('mousemove', (event) => {
    if (isPanning) {
        let dX = event.clientX - startPanX;
        let dY = event.clientY - startPanY;
        canvasCenter.x += dX;
        canvasCenter.y += dY;
        startPanX = event.clientX;
        startPanY = event.clientY;
        clearCanvas();
        draw();
    }
})

canvas.addEventListener('mouseup', event => {
    isPanning = false;
    canvas.style.cursor = 'grab';
})

canvas.addEventListener('mouseleave', event => {
    isPanning = false;
    canvas.style.cursor = 'grab';
})

canvas.addEventListener('wheel', (event) => {
    clearCanvas();
    if (event.deltaY < 0) {
        bigRadius += 45;
    } else {
        bigRadius -= 45;
    }
    draw();
})

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

let orgData;
let bigRadius = getRadius();
(async function main() {
    orgData = await nodeFactory();
    // ctx.fillStyle = "red" //Shows canvas center
    // ctx.fillRect(0, 0, canvasCenter.x, canvasCenter.y)
    draw();

})();//IIFE

function draw() {
    console.log(`Canvas Center X: ${canvasCenter.x} - Canvas Center Y: ${canvasCenter.y}`)
    const nodeLayerCoordinates = getNodeCoordinateObject(bigRadius, orgData) //Adjustment Radius
    drawNodeLayer(orgData.projectNodes, nodeLayerCoordinates.projectLayerCoordinates);
    drawNodeLayer(orgData.userNodes, nodeLayerCoordinates.userLayerCoordinates);
    drawNodeLayer(orgData.taskNodes, nodeLayerCoordinates.taskLayerCoordinates);
}
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

}

function getRadius() {
    return canvasCenter.y - (canvasCenter.y * 0.155555)
}

function getNodeCoordinateObject(outerRadius, orgData) {
    //Adjustment - Percent of outer radius
    const taskLayerSizeRatio = 0.45;
    const projectLayerSizeRatio = 0.1;

    let nodeCoordinateObject = {
        projectLayerCoordinates: calculateTangentialCoordinates(outerRadius * projectLayerSizeRatio, orgData.projectNodes),
        taskLayerCoordinates: calculateTangentialCoordinates(outerRadius * taskLayerSizeRatio, orgData.taskNodes),
        userLayerCoordinates: calculateTangentialCoordinates(outerRadius, orgData.userNodes),

    }
    return nodeCoordinateObject;

    function calculateTangentialCoordinates(radius, nodes) {
        const angleStep = (2 * Math.PI) / nodes.length; // Calculate angle step
        const coordinates = [];

        for (let i = 0; i < nodes.length; i++) {
            const angle = angleStep * i;
            let x = radius * Math.cos(angle);
            let y = radius * Math.sin(angle);
            x += canvasCenter.x;
            y += canvasCenter.y;
            coordinates.push({ x, y }); // Push coordinates to array
        }
        return coordinates;
    }


}


function drawNodeLayer(nodeList, coordinateList) {
    for (let i = 0; i < nodeList.length; i++) {
        switch (nodeList[i].type) {
            case "userNode":

                //Adjustment
                const userNodeSize = 35;

                ctx.stroke();
                ctx.beginPath();
                ctx.lineWidth = 6;
                ctx.arc(coordinateList[i].x, coordinateList[i].y, userNodeSize, 0, Math.PI * 2, false)
                ctx.stroke();
                ctx.font = '18px mono'
                ctx.textAlign = 'center';
                ctx.textBaseline = 'center'
                //Need to find way to vertically align text
                ctx.fillText(nodeList[i].label, coordinateList[i].x, coordinateList[i].y + userNodeSize + 25)


                break;
            case "taskNode":
                //Adjustment
                const taskNodeSize = 10;
                ctx.lineWidth = 2;
                ctx.rect(coordinateList[i].x, coordinateList[i].y, taskNodeSize, taskNodeSize)
                ctx.stroke();
                ctx.font = '22px mono'
                ctx.textAlign = 'center';
                ctx.textBaseline = 'center'
                ctx.fillText(nodeList[i].label, coordinateList[i].x + 50, coordinateList[i].y + (taskNodeSize + 25))
                ctx.stroke();
                break;

            case "projectNode":
                //Adjustment
                const projectNodeSize = 40;
                // Calculate the coordinates of the hexagon vertices
                const angleStep = (Math.PI / 180) * 60; // 60 degrees in radians
                const points = [];
                for (let j = 0; j < 6; j++) {
                    const angle = angleStep * j;
                    const x = coordinateList[i].x + projectNodeSize * Math.cos(angle);
                    const y = coordinateList[i].y + projectNodeSize * Math.sin(angle);
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
                ctx.fillText(nodeList[i].label, coordinateList[i].x, coordinateList[i].y + projectNodeSize + 15) //Node size is added to push label
                ctx.stroke();                                                        //Below shape
                break;
            default:
                console.log("we hit the default - switch checks node type")
                break;
        }


    }
}
