
import express from 'express'
const router = express.Router();

router.get("/", (req, res) => {
    res.send("organization list#");
}); 

router.get("/new", (req, res) => {
    res.send("#new organization form");
});

router.get("/:id", (req, res) => {
    res.send(`organization id requesting for: ${req.params.id}`)
})

export default router;
