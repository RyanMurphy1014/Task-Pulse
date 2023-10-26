const express = require("express");
const app = express();
const port = process.env.PORT; 
const path = require('path')
const bodyParser = require('body-parser')




app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, '../../staticAssets')));
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.render('login.ejs');
});
    
app.listen(port, () => {
   console.log("TaskPulse server is running on port " + port);
});
    

//Router boilerplate
const userRouter = require('./routes/users');
const projectsRouter = require('./routes/projects');
const taskRouter = require('./routes/task');
const organizationRouter = require('./routes/organization');
const loginRouter = require('./routes/login')
app.use("/users", userRouter);
app.use("/projects", projectsRouter);
app.use("/tasks", taskRouter);
app.use("/organizations", organizationRouter);
app.use("/login", loginRouter);

