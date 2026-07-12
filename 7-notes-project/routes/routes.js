import { Router } from "express";
import { createNote, getNote, getNotes, deleteNote } from "../controllers/notes.controllers.js";

const router = Router()

router.get('/getNote/:id', getNote)
router.get('/getNotes/', getNotes)
router.post('/createNote', createNote)
// router.patch('/updateNote')
router.delete('/deleteNote', deleteNote)

export default router