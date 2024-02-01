let canvas = document.createElement("canvas");
document.getElementById("canvasContainer").append(canvas);

let renderer = canvas.getContext("2d");

const nodeTypes = {
    task: "task",
    user: "user",
    project: "project",
}

const nodeShapes = {
    task: "square",
    user: "circle",
    project: "hexagon",
}
//Only pass in option from nodeShapes enum
function getShape(nodeType){
    let output;
    switch(nodeType){
        case "task":
            output = nodeShapes.task;
            break;
        case "user":
            output =  nodeShapes.user;
            break;
        case "project":
            output = nodeShapes.project;
            break;
    }
    return output;
}

class pulseNode {
    constructor(nodeTypeEnumOption, label, data_id) {
        this.type = nodeTypeEnumOption;
        this.label = label;
        this.data = data_id;

        this.shape = getShape(this.type)
    }
    
    toString(){
        return `This node is type: ${this.type} with shape: ${this.shape} - labeled ${this.label} pointing to data_id ${this.data}`
    }

}

const testNode = new pulseNode(nodeTypes.project, "Test project", "test data point")
console.log(testNode.toString())
