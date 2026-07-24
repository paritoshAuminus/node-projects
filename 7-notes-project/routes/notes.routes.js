import { Router } from "express";
import { register, login } from "../controllers/auth.controllers.js";
import { createNote, getNote, getNotes, updateNote, deleteNote } from "../controllers/notes.controllers.js";
import { tokenAuthenticator } from "../middlewares/auth.middlewares.js"
import { User } from "../models/user.models.js";

const router = Router()

router.get('/getnotes', getNotes)

router.post('/createnote', tokenAuthenticator, createNote)
router.patch('/updateNote/:id', updateNote)
router.delete('/deleteNote', deleteNote)

export default router