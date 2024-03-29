import express from 'express'
import supabase from "../../db/supabaseConnection.js"
import crypto from 'crypto'
import passwordUtils from '../../crypto/hasher.js'

const router = express.Router();
router.post("/", async (req, res) => {
    if(await isValidLogin(req.body.email, req.body.password)){
        const uuid = crypto.randomUUID();
        res.cookie('login_token', uuid);
        res.cookie("login_failure", false)
        res.redirect('/');

        const { error } = await supabase
        .from('credentials')
        .update({login_token: uuid})
        .eq("email", req.body.email);
    }else{
        res.cookie("login_failure", true);
        res.sendFile("login_invalidLogin.html");
    }
}); 

async function isValidLogin(email, unHashed_password){
    const hashed_password = await hashPassword(email, unHashed_password);
    const loginAttempt = await supabase
    .from('credentials')
    .select('user_id')
    .eq('email', email)
    .eq('hashed_password', hashed_password);
    
    try {
        if(loginAttempt.data.length > 0){
            return true;
        }
    } catch (error) {
        console.log("Invalid login")
    }
    return false;
}

async function hashPassword(email, unHashed_password){
    const saltLookup = await supabase
    .from('credentials')
    .select('salt')
    .eq('email', email);


    try {
        const hashedPassword = passwordUtils.generateHashedPassword(unHashed_password, saltLookup.data[0].salt);
        return hashedPassword;
    } catch (error) {
        console.log("Couldn't resolve password / Likely invalid credentials")
        return null
    }


}

export default router;
