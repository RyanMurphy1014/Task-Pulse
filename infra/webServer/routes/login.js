const express= require('express');
const router = express.Router();
const { supabase } = require("../../db/supabaseConnection")
const crypto = require('crypto')

router.post("/", async (req, res) => {
    if(await isValidLogin(req.body.email, req.body.password)){
        const uuid = crypto.randomUUID();
        res.cookie('login_token', uuid);
        res.send("Valid Login! Make home page html");

        console.log(uuid)
        const { error } = await supabase
        .from('credentials')
        .update({login_token: uuid})
        .eq("user_id", 7);
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
    
    if(loginAttempt.data.length > 0){
        return true;
    }
    return false;
}


module.exports = router;
