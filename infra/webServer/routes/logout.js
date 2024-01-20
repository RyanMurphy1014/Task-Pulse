import express from 'express';
import supabase from '../../db/supabaseConnection.js';
const router = express.Router();


router.get("/", async (req, res) => { const currentUserEmail = await supabase
        .from('credentials')
        .select('email')
        .eq('login_token', req.headers.cookie.split("=")[1])

    res.clearCookie('login_token');
    res.clearCookie('login_failure');

    try {
        const clearLoginToken = await supabase
            .from('credentials')
            .update({ login_token: null })
            .eq('email', currentUserEmail.data[0].email)
    } catch (error) {
        console.log("Couldn't find login token")
    }
    res.redirect("/");
})
export default router;
