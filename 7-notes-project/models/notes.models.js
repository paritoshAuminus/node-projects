import mongoose, {Schema} from "mongoose";
import { User } from "./user.models.js";

const notesSchema = new Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: User
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
}, {timestamps: true})

export const Notes = mongoose.model("Notes", notesSchema)