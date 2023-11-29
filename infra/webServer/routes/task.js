
import express from 'express'
const router = express.Router();

router.get("/", (req, res) => {
    res.send("task list#");
}); 

router.get("/new", (req, res) => {
    res.send("#new task form");
});

router.get("/:id", (req, res) => {
    res.send(`task id requesting for: ${req.params.id}`)
})

export default router;
