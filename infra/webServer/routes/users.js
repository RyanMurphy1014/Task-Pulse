import express from 'express'
const router = express.Router();
import supabase from '../../db/supabaseConnection.js'
import getValueOfCookie from '../../utils/cookieParser.js';

router.get("/", (req, res) => {
    res.send("user list#");
});

router.get("/new", (req, res) => {
    res.send("#new user form");
});

//Gets all the users for the clients organization
router.get("/all", async (req, res) => {
    console.log()
    const organizationId = getValueOfCookie("organization_id", req.headers.cookie);
    //Newest version
    const userList = await supabase
        .from('users')
        .select()
        .eq('parent_organization_id', organizationId)

    if (!userList.error) {
        console.log("Sending json to client")
        res.json(userList.data)
    }else{
        console.log("we got problems")
        console.log(allUsers.error)
    }
    
})

router.get("/:id", (req, res) => {
    res.send(`User id requesting for: ${req.params.id}`)
})



export default router;
