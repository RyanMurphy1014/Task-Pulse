import express from 'express'
import getValueOfCookie from '../../utils/cookieParser.js';
import supabase from '../../db/supabaseConnection.js';
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Projects list#");
}); 

router.get("/all", async (req, res) => {
    const projectData = await supabase
        .from('projects')
        .select()
        .eq("parent_organization_id", getValueOfCookie('organization_id', req.headers.cookie));
    
    res.json(projectData.data)
})


router.get("/new", (req, res) => {
    res.send("#new project form");
});


export default router;
