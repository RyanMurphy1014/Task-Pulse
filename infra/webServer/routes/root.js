import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';

import checkAuthentication from '../middleware/auth.js'

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Using authorization middleware
router.get("/", checkAuthentication, (req, res) => {

    //Holds path to views folder
    const sendFileOpts = {
        root: path.join(__dirname, '../../../views'),
    }

    if (req.headers.cookie != null) {
        if (req.headers.cookie.includes("login_token")) {
            res.cookie("login_failure", false)
            console.log("USER AUTHENTICATED");
            res.sendFile('home.html', sendFileOpts);
        } if (req.headers.cookie.includes("login_failure=true")) {
            console.log("Incorrect username or password")
            res.sendFile('login_invalidLogin.html')
        }
    } else {
        console.log("Unauthenticated user");
        res.sendFile('login.html', sendFileOpts);
    }
});



export default router;
