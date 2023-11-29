import express from 'express'
import supabase from "../../db/supabaseConnection.js"
import crypto from 'crypto'

const router = express.Router();
router.post("/", async (req, res) => {
    if(await isValidLogin(req.body.email, req.body.password)){
        const uuid = crypto.randomUUID();
        res.cookie('login_token', uuid);
        res.redirect('/');

        console.log(uuid)
        const { error } = await supabase
        .from('credentials')
        .update({login_token: uuid})
        .eq("email", req.body.email);
        console.log(error)
    }else{
        res.send("Invalid login! Get out! Create error page, redirct to home");
    }
}); 

async function isValidLogin(email, password){
    const loginAttempt = await supabase
    .from('credentials')
    .select('email')
    .eq('email', email)
    .eq('password', password);
    
    try {
        if(loginAttempt.data.length > 0){
            return true;
        }
    } catch (error) {
        console.log("Invalid login")
    }
    return false;
}

export default router;
