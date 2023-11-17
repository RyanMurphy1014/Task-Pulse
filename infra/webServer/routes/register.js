import express from 'express';
const router = express.Router();

const { createHash } = require('crypto');
const { supabase } = require('../../db/supabaseConnection')

router.get("/", (res) => {
    res.render('register.ejs');
}); 

router.post("/newUser", async (req, res) => {
    const userCredentials = req.body;

    if(userCredentials.email.includes('@')){
        const userCreationError = await insertUser(userCredentials);
        const credentialCreationError = await insertCredentials(userCredentials);
        if( userCreationError === null && credentialCreationError === null){
            res.status(200).send("User Created");
        }else{
            console.log("User Creation Error - ", userCreationError.message);
            console.log()
            console.log("Credential Creation Error - ", credentialCreationError.message);
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


    const passwordSet = generatePasswordSet(userCredentials.password)
    const { error } = await supabase.from('credentials')
    .insert({email: userCredentials.email,
        hashed_password: passwordSet.hashed,
        salt: passwordSet.salt,
        user_id: data[0].user_id});
    return error;
}

async function insertUser(userCredentials){
    const { error } = await supabase
        .from('users')
        .insert({
            name: userCredentials.name,
            email: userCredentials.email,
            parent_organization_id: userCredentials.organizationId,
        })
    return error;
}

function generatePasswordSet(password){
    const salt = generateSalt();
    const saltedPassword = password + salt;  
    const passwordSet = {
        hashed: createHash('sha256').update(saltedPassword).digest('hex'),
        salt: salt,
    }
    return passwordSet;
}


function generateSalt(){
    const saltLength = 30;
    const availableCharacters = ['a','c','e','g','i','k','m','o','q','s','u','w',
       'x','z','2','4','6','8','0','@','$','^','*'];
    let output = '';

    for(let i = 0; i < saltLength; i++){
        const randomCharacterIndex = 
            Math.floor(Math.random() * availableCharacters.length);
        output += availableCharacters[randomCharacterIndex];
    }
    return output;
}


module.exports = router;
