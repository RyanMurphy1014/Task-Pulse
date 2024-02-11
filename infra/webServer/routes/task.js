
import express from 'express'
import getValueOfCookie from '../../utils/cookieParser.js';
import supabase from '../../db/supabaseConnection.js';
const router = express.Router();

router.get("/", (req, res) => {
    res.send("task list#");
}); 

router.get("/all", async(req, res) => {
    const taskList = await supabase
        .from('tasks')
        .select()
        .eq('parent_organization_id', getValueOfCookie('organization_id', req.headers.cookie));
    res.json(taskList.data);
})

router.get("/new", (req, res) => {
    res.send("#new task form");
});

router.get("/:id", (req, res) => {
    res.send(`task id requesting for: ${req.params.id}`)
})

export default router;
