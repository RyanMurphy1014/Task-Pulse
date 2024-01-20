
import express from 'express'
const router = express.Router();

router.get("/", (req, res) => {
    const organization = req.headers.cookie
    res.send(`Showing Pulse view for Organization {$organization}`);
}); 



export default router;
