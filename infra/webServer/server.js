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
    if(req.headers.cookie != undefined){
        if(req.headers.cookie.includes("login_token")){
            console.log("USER AUTHENTICATED");
            res.render('home.ejs');
        }
    }else{
        console.log("Unauthenticated user");
    }
    res.render('login.ejs');
});


//app.get("/logout", async (req, res) => {
    //const currentUserEmail = await supabase
        //.from('credentials')
        //.select('email')
        //.eq('login_token', req.headers.cookie.splice())
    //res.clearCookie('login_token');
    //const {error} = supabase
    //.from('credentials')
    //.update({login_token: null})
    //.eq()
    //res.redirect("/");
//})
    //
app.listen(port, () => {
   console.log("TaskPulse server is running on port " + port);
});
    

//Router boilerplate
const userRouter = require('./routes/users');
const projectsRouter = require('./routes/projects');
const taskRouter = require('./routes/task');
const organizationRouter = require('./routes/organization');
const loginRouter = require('./routes/login')
const registerRouter = require('./routes/register')
app.use("/register", registerRouter);
app.use("/users", userRouter);
app.use("/projects", projectsRouter);
app.use("/tasks", taskRouter);
app.use("/organizations", organizationRouter);
app.use("/login", loginRouter);

