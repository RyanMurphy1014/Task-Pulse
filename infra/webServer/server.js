import bodyParser from 'body-parser'
import path from 'path'
import express from "express";
import { fileURLToPath } from 'url';

//Exposes path of this file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)


const app = express();
const port = process.env.PORT;

app.use(express.static(path.join(__dirname, '../../staticAssets')));
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(bodyParser.json());




//Router boilerplate
import userRouter from './routes/users.js'
app.use("/users", userRouter);

import projectsRouter from './routes/projects.js'
app.use("/projects", projectsRouter);

import taskRouter from './routes/task.js'
app.use("/tasks", taskRouter);

import organizationRouter from './routes/organization.js'
app.use("/organizations", organizationRouter);

import loginRouter from './routes/login.js'
app.use("/login", loginRouter);

import registerRouter from './routes/register.js'
app.use("/register", registerRouter);

import pulseViewRouter from './routes/pulseView.js'
app.use("/pulseView", pulseViewRouter);

import logoutRouter from './routes/logout.js'
app.use("/logout", logoutRouter);

import rootRouter from './routes/root.js'
app.use("/", rootRouter);



//Starts app
app.listen(port, () => {
    console.log("TaskPulse server is running on port " + port);
});
