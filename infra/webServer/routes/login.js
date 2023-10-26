const express= require('express');
const router = express.Router();

router.post("/", (req, res) => {
    res.send(req.body.email);
}); 

module.exports = router;
