import { Router } from "express";
import { register } from "../controllers/auth.controllers.js";
import { createNote, getNote, getNotes, updateNote, deleteNote } from "../controllers/notes.controllers.js";
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

// LOGIN AND REGISTER
router.post('/register', register)
// router.post('/login')

// NOTES CRUD ROUTES
router.get('/getNote/:id', getNote)
router.get('/getNotes', getNotes)
router.post('/createNote', createNote)
router.patch('/updateNote/:id', updateNote)
router.delete('/deleteNote', deleteNote)

export default router