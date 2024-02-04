import express from 'express'
const router = express.Router();
import supabase from '../../db/supabaseConnection.js'

router.get("/", (req, res) => {
    res.send("user list#");
});

router.get("/new", (req, res) => {
    res.send("#new user form");
});

router.get("/all", async (req, res) => {
    const allUsers = await supabase
        .from('users')
        .select()
        .eq('parent_organization_id', 999);

    if (!allUsers.error) {
        console.log("Sending json to client")
        res.json(allUsers.data)
    }else{
        console.log("we got problems")
        console.log(allUsers.error)
    }
    
})

router.get("/:id", (req, res) => {
    res.send(`User id requesting for: ${req.params.id}`)
})



export default router;
