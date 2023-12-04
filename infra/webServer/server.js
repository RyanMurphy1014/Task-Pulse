import bodyParser from 'body-parser'
import path from 'path'
import express from "express";
import { fileURLToPath } from 'url';
import supabase from '../db/supabaseConnection.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)


    const app = express();
    const port = process.env.PORT; 


    app.set("view engine", "ejs");

    app.use(express.static(path.join(__dirname, '../../staticAssets')));
    app.use(bodyParser.urlencoded({
        extended: true,
    }));
    app.use(bodyParser.json());

    app.get("/", (req, res) => {
        if(req.headers.cookie != null){
            if(req.headers.cookie.includes("login_token")){
                res.cookie("login_failure", false)
                console.log("USER AUTHENTICATED");
                res.render('home.ejs');
            }if(req.headers.cookie.includes("login_failure=true")){
                console.log("Incorrect username or password")
                res.render('login_invalidLogin.ejs')
            }
        } else{
            console.log("Unauthenticated user");
            res.render('login.ejs');
        }
    });


    app.get("/logout", async (req, res) => {
        
        const currentUserEmail = await supabase
            .from('credentials')
            .select('email')
            .eq('login_token', req.headers.cookie.split("=")[1])

        res.clearCookie('login_token');
        res.clearCookie('login_failure');

        try {
            const clearLoginToken = await supabase
            .from('credentials')
            .update({login_token: null})
            .eq('email', currentUserEmail.data[0].email)
        } catch (error) {
            console.log("Couldn't find login token")
        }
        res.redirect("/");
    })
        
    app.listen(port, () => {
       console.log("TaskPulse server is running on port " + port);
    });
        

    //Router boilerplate
    import userRouter from './routes/users.js'
    import projectsRouter from './routes/projects.js'
    import taskRouter from './routes/task.js'
    import organizationRouter from './routes/organization.js'
    import loginRouter from './routes/login.js'
    import registerRouter from './routes/register.js'
    app.use("/register", registerRouter);
    app.use("/users", userRouter);
    app.use("/projects", projectsRouter);
    app.use("/tasks", taskRouter);
    app.use("/organizations", organizationRouter);
    app.use("/login", loginRouter);

