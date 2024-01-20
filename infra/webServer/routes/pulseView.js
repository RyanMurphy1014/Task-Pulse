
import express from 'express'
const router = express.Router();

router.get("/", (req, res) => {
    const organization = req.headers.cookie
    res.sendFile('pulseView.html', {root: './views'})
}); 



export default router;
