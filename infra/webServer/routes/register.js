import express from 'express';
const router = express.Router();

import supabase from '../../db/supabaseConnection.js'
import hasher from '../../crypto/hasher.js'

router.get("/", (req, res) => {
    res.render('register.ejs');
}); 

router.post("/newUser", async (req, res) => {
    const userCredentials = req.body;

    if(userCredentials.email.includes('@')){
        const userCreationReq = await insertUser(userCredentials);
        const credentialCreationReq = await insertCredentials(userCredentials);
        if( userCreationReq.error === null && credentialCreationReq.error === null){
            res.render('home.ejs')
        }else{
            console.log("User Creation Error - ", userCreationReq.error);
            console.log()
            console.log("Credential Creation Error - ", credentialCreationReq.error);
            console.log()
            res.status(500).send("Failed to create User")
        }
    }else{
        res.status(400).send("Not a valid email")
    }
});

async function insertCredentials(userCredentials){
    const { data } = await supabase
        .from('users')
        .select('user_id')
        .eq('email', userCredentials.email)


    const passwordSet = hasher.generatePasswordSet(userCredentials.password)
    const credentialLookup= await supabase.from('credentials')
    .insert({email: userCredentials.email,
        hashed_password: passwordSet.hashed,
        salt: passwordSet.salt,
        user_id: data[0].user_id});
    return credentialLookup;
}

async function insertUser(userCredentials){
    const insertReq = await supabase
        .from('users')
        .insert({
            name: userCredentials.name,
            email: userCredentials.email,
            parent_organization_id: userCredentials.organizationId,
        })
    return insertReq;
}


export default router;
