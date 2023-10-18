const express= require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Projects list#");
}); 

router.get("/new", (req, res) => {
    res.send("#new project form");
});


module.exports = router;
