import { Notes } from "../models/notes.models.js";
import { User } from "../models/user.models.js";


// ------------------------------------------
// NOTES CONTROLLERS CONFIG
// ------------------------------------------


// [GET] (Public) - Get one note (pass note Id in the url)
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

// [GET] (Public) - Get all notes
const getNotes = async (req, res) => {
    try {
        const response = await Notes.find({})
        res.json(response)
    } catch (error) {
        res.status(500).json({message: "Error fetching notes"})
    }
}

// [POST] (Protected) - Create new note
const createNote = async (req, res) => {

    const user = req.user
    const title = req.body.title
    const body = req.body.body

    // if (!decodedToken) {
    //     return res.status(403).json({
    //         message: "Please login to create a note"
    //     })
    // }

    if (!title || !body) {
        return res.status(403).json({
            message: "Title and body are required to create a new note"
        })
    }
    
    try {
        // const user = await User.findOne({_id: decodedToken.userId})
        const response = await Notes.create({
            user: user,
            title: title,
            body: body
        })

        return res.status(201).json({message: "Note created successfully!", data: {userId: user._id, title: response.title, body: response.body}})
    } catch (error) {
        return res.status(404).json({message: "Error creating note"})
    }
}

// [POST] (Protected) - Update your own note
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

// [DELETE] (Protected) - Delete your own notes
const deleteNote = async (req, res) => {
    const id = req.body.noteId

    if (!id) {
        res.status(400).json({
            message: "No id in the request"
        })
    }

    try {
        const response = await Notes.deleteOne({_id: Id})
        res.status(200).json({message: "Note deleted successfully", data: response})
    } catch (error) {
        res.status(500).json({message: "Note delettion failed", error: error})
    }
}


export {createNote, getNotes, getNote, updateNote, deleteNote}