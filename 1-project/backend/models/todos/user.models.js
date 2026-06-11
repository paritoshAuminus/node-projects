import mongoose from 'mongoose'

// METHOD ONE :: DIRECTLY GIVING TYPE :: SMALLER PROJECTS
// Defining schema
// const userSchema = new mongoose.Schema(
// raw data which will go into the database
//     {
//         username: String,
//         email: String,
//         isActive: Boolean
//     }
// )

// METHOD TWO :: EXPANDING EACH PROPERTY :: BIGGER PROJECTS
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,   // checks for type
            required: true, // checks that the field is given
            unique: true,   // field must be unique
            lowercase: true // self explanatory :/
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: [true, 'Password is required']
        }
    }, { timestamps: true}
)

// exporting model, { 'modelName', modelSchema }
// the const `User` becomes `users`; lowercase and plural; it is the working of mongo DB
export const User = mongoose.model('User', userSchema)