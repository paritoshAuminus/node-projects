import Router from "express";
import { register, login } from "../controllers/auth.controllers.js";
import { User } from "../models/user.models.js";

const router = Router()

// /////////////// TESTING ///////////////
router.get('/getusers', async (req, res) => {
    const response = await User.find({})
    res.json(response)
})

router.delete('/deleteuser/:userId', async (req, res) => {
    const userId = req.body.userId
    const response = await User.deleteOne({ _id: userId })
    res.json(response)
})


// Authentication routes
router.post('/register', register)
router.post('/login', login)


export default router