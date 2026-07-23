import mongoose, { Schema } from "mongoose";
import { hash } from "bcrypt";

// USER MODEL
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
}, {timestamps: true})

// HASHING PASSWORD IN BCRYPT 

// userSchema.pre("save", (doc) => {
//     hash(doc.password, 12, (err, hash) => {
//         {}
//     })
// })


export const User = mongoose.model('User', userSchema)
