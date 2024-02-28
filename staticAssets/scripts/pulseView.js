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
document.getElementById("canvasContainer").append(canvas);

const taskNodeSize = 10;
const userNodeSize = 35;
const projectNodeSize = 40;
let outterRadius = getRadius();

async function aggregateData() {
    const users = await fetch("/users/all")
    const tasks = await fetch("/tasks/all")
    const projects = await fetch("/projects/all");

    taskDataJson = tasks;

    const fetchedData = {
        users: await users.json(),
        tasks: await tasks.json(),
        projects: await projects.json(),
    }
    return fetchedData;
}

let orgData;
(async function main() {
    orgData = await aggregateData()
    draw();

})();//IIFE

function draw() {
    nodesWithCoordinates = addCoordinates(outterRadius, orgData) //Adjustment Radius

    drawTaskConnections(orgData)

    drawNodeLayer(orgData.projects, "projectNode");
    drawNodeLayer(orgData.users, "userNode");
    drawNodeLayer(orgData.tasks, "taskNode");
}

function drawTaskConnections(orgNodes) {
    for (node of orgNodes.tasks) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgb(130,0,0)';
        ctx.lineWidth = 3

        const matchingUser = getUserById(node.assigned_user);
        const matchingProject = getProjectById(node.parent_project_id);
        ctx.lineTo(matchingUser.x, matchingUser.y)
        ctx.lineTo(node.x + taskNodeSize / 2, node.y + taskNodeSize / 2);
        ctx.lineTo(matchingProject.x, matchingProject.y)
        ctx.stroke();
    }
}

function getProjectById(id) {
    for (project of orgData.projects) {
        if (project.project_id === id) {
            return project;
        }
    }
}

function getUserById(id) {
    for (user of orgData.users) {
        if (user.user_id === id) {
            return user
        }
    }
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

}

function getRadius() {
    return canvasCenter.y - (canvasCenter.y * 0.15)
}

function addCoordinates(outerRadius, orgData) {
    //Adjustment - Percent of outer radius
    const taskLayerSizeRatio = 0.45;
    const projectLayerSizeRatio = 0.1;

    mutateWithCoordinates(outerRadius * projectLayerSizeRatio, orgData.projects)
    mutateWithCoordinates(outerRadius * taskLayerSizeRatio, orgData.tasks)
    mutateWithCoordinates(outerRadius, orgData.users)

    return orgData;

    function mutateWithCoordinates(radius, nodes) {
        const angleStep = (2 * Math.PI) / nodes.length; // Calculate angle step

        if (nodes.length === 1) {
            let x = canvasCenter.x;
            let y = canvasCenter.y;
            nodes[0].x = x;
            nodes[0].y = y;
        } else {
            for (let i = 0; i < nodes.length; i++) {
                const angle = angleStep * i;
                let x = radius * Math.cos(angle);
                let y = radius * Math.sin(angle);
                nodes[i].x = x + canvasCenter.x;
                nodes[i].y = y + canvasCenter.y;
            }
        }
        return nodes;
    }
}

function drawNodeLayer(nodeList, type) {
    ctx.strokeStyle = 'black'
    for (let i = 0; i < nodeList.length; i++) {
        switch (type) {
            case "userNode":
                ctx.fillStyle = 'rgb(80,80,80)'
                ctx.stroke();
                ctx.beginPath();
                ctx.lineWidth = 6;
                ctx.arc(nodeList[i].x, nodeList[i].y, userNodeSize, 0, Math.PI * 2, false)
                ctx.fill();
                ctx.font = '18px mono'
                ctx.textAlign = 'center';
                ctx.textBaseline = 'center'
                ctx.fillStyle = 'black'
                ctx.fillText(nodeList[i].name, nodeList[i].x, nodeList[i].y + userNodeSize + 25)
                ctx.strokeStyle = 'black'
                ctx.arc(nodeList[i].x, nodeList[i].y, userNodeSize, 0, Math.PI * 2, false)
                ctx.stroke();

                break;
            case "taskNode":
                ctx.lineWidth = 2;
                ctx.fillRect(nodeList[i].x, nodeList[i].y, taskNodeSize, taskNodeSize)
                ctx.font = '22px mono'
                ctx.textAlign = 'center';
                ctx.textBaseline = 'center'
                ctx.fillText(nodeList[i].name, nodeList[i].x + 50, nodeList[i].y + (taskNodeSize + 25))
                break;

            case "projectNode":
                const angleStep = (Math.PI / 180) * 60; // 60 degrees in radians
                const points = [];
                for (let j = 0; j < 6; j++) {
                    const angle = angleStep * j;
                    const x = nodeList[i].x + projectNodeSize * Math.cos(angle);
                    const y = nodeList[i].y + projectNodeSize * Math.sin(angle);
                    points.push({ x, y });
                }

                ctx.beginPath();
                ctx.moveTo(points[0].x, points[0].y);
                for (let i = 1; i < points.length; i++) {
                    ctx.lineTo(points[i].x, points[i].y);
                }

                ctx.closePath();
                ctx.fillStyle = 'rgb(80,80,80)'
                ctx.fill();
                ctx.strokeStyle = 'black'
                ctx.stroke();
                ctx.font = '18px mono'
                ctx.textAlign = 'center';
                ctx.textBaseline = 'center'
                ctx.fillStyle = "black"
                ctx.fillText(nodeList[i].label, nodeList[i].x, nodeList[i].y + projectNodeSize + 15)
                ctx.stroke();
                break;
            default:
                console.log("we hit the default - switch checks node type")
                break;
        }


    }
}

//Variables for panning
let isPanning = false;
let startPanX;
let startPanY;
let translateX = 0;
let translateY = 0;
let velocityX = 0;
let velocityY = 0;
let friction = 0.90;

canvas.addEventListener('mousedown', (event) => {
    isPanning = true;
    startPanX = event.clientX;
    startPanY = event.clientY;
    velocityX = 0;
    velocityY = 0;
    canvas.style.cursor = "grabbing";

})

canvas.addEventListener('mousemove', (event) => {
    if (isPanning) {
        let dX = event.clientX - startPanX;
        let dY = event.clientY - startPanY;
        canvasCenter.x += dX;
        canvasCenter.y += dY;
        velocityX = dX;
        velocityY = dY;
        startPanX = event.clientX;
        startPanY = event.clientY;
        clearCanvas();
        draw();
    }
})

canvas.addEventListener('mouseup', () => {
    isPanning = false;
    canvas.style.cursor = 'grab';
    startInertia();
})

canvas.addEventListener('mouseleave', () => {
    isPanning = false;
    canvas.style.cursor = 'grab';
    startInertia();
})

canvas.addEventListener('wheel', (event) => {
    clearCanvas();
    if (event.deltaY < 0) {
        outterRadius += 45;
    } else {
        if (outterRadius > 400) {
            outterRadius -= 45;
        }
    }
    draw();
})
function startInertia() {
    let inertiaInterval = setInterval(function() {
        velocityX *= friction;
        velocityY *= friction;
        canvasCenter.x += velocityX;
        canvasCenter.y += velocityY;
        clearCanvas();
        draw();
        if (Math.abs(velocityX) < 0.1 && Math.abs(velocityY) < 0.1) {
            clearInterval(inertiaInterval);
        }
    }, 32); // Update every 16ms (about 60fps)
}

