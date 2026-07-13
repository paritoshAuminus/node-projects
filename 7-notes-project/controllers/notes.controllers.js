import { Notes } from "../models/notes.models.js";

const getNote = async (req, res) => {

    const noteId = req.params.id

    if (noteId === undefined) {
        res.json({
            message: "Please pass a valid ID"
        })

        return new Error("getNote :: No ID passed in URL")
    }

    try {
        const response = await Notes.find({_id: noteId})
        res.json(response)
    } catch (error) {
        console.log(`Controllers :: getNote :: ${error}`)
    }
}

const getNotes = async (req, res) => {
    try {
        const response = await Notes.find()
        res.json(response)
    } catch (error) {
        console.log(`Controllers :: getNotes :: ${error}`)
    }
}

const createNote = async (req, res) => {

    const title = req.body.title
    const body = req.body.body

    if (!title || !body) {
        res.json({
            message: "Title and body are required for to create a new note"
        })

        return new Error("createNote :: Title and Body are required to create a new note")
    }

    try {
        const response = await Notes.create({
            title: title,
            body: body
        })

        res.json(response)
    } catch (error) {
        console.log(`Controllers :: createNote :: ${error}`)
    }
}

const updateNote = async (req, res) => {
    const Id = req.params.id
    const title = req.body.title
    const body = req.body.body

    if (Id === undefined) {
        res.json({
            message: "No valid ID in the request URL"
        })

        return new Error("updateNote :: No ID in the url")
    }

    try {
        const response = await Notes.updateOne({_id: Id}, {
            title: title,
            body: body
        })
        
        res.json(response)
    } catch (error) {
        console.log(`Controllers :: updateNote :: ${error}`)
    }
}

const deleteNote = async (req, res) => {
    const Id = req.params.id

    if (id === undefined) {
        res.json({
            message: "No valid ID in the request URL"
        })
        
        return new Error("deleteNote :: No ID in the url")
    }

    try {
        const response = await Notes.deleteOne({_id: Id})
        res.json(response)
    } catch (error) {
        console.log(`Controllers :: deleteNote :: ${error}`)
    }
}


export {createNote, getNotes, getNote, updateNote, deleteNote}