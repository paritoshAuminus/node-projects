import { Router } from "express";
import { register, login } from "../controllers/auth.controllers.js";
import { createNote, getNote, getNotes, updateNote, deleteNote } from "../controllers/notes.controllers.js";
import { tokenAuthenticator } from "../middlewares/auth.middlewares.js"
import { User } from "../models/user.models.js";

const router = Router()

// /////////////// TESTING ///////////////
router.get('/getusers', async (req, res) => {
    const response = await User.find({})
    res.json(response)
})

router.delete('/deleteuser', async (req, res) => {
    const userId = req.body.userId
    const response = await User.deleteOne({ _id: userId })
    res.json(response)
})

router.post('/createnote', tokenAuthenticator, createNote)
router.patch('/updateNote/:id', updateNote)
router.delete('/deleteNote', deleteNote)

export default router