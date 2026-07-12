import mongoose, {Schema} from "mongoose";

const notesSchema = new Schema({
    title: String,
    body: String
}, {timestamps: true})

export const Notes = mongoose.model("Notes", notesSchema)