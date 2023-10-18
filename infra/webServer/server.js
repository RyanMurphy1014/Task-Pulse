const express = require("express");
const app = express();
const port = 8080; 
const path = require('path')




app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, '../../staticAssets')));

app.get("/", (req, res) => {
    res.render('login.ejs');
});
    
app.listen(port, () => {
   console.log("TaskPulse server is running.");
});
    

//Router boilerplate
const userRouter = require('./routes/users');
const projectsRouter = require('./routes/projects');
const taskRouter = require('./routes/task');
const organizationRouter = require('./routes/organization');
app.use("/users", userRouter);
app.use("/projects", projectsRouter);
app.use("/tasks", taskRouter);
app.use("/organizations", organizationRouter);

