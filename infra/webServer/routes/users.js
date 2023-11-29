import express from 'express'
const router = express.Router();

router.get("/", (req, res) => {
    res.send("user list#");
}); 

router.get("/new", (req, res) => {
    res.send("#new user form");
});

router.get("/:id", (req, res) => {
    res.send(`User id requesting for: ${req.params.id}`)
})

export default router;
