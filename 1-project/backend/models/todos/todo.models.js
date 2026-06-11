import mongoose from 'mongoose'

// ESTABLISHING RELATION BETWEEN TWO MODELS
const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    complete: {
        type: Boolean,
        default: false
    },
    // need to know who created it
    createdBy: {
        // special type; takes reference from another model
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'     // ref: <modelName>; 'User' from `user.models.js`
    },
    // short hand for defining type, notice that this is not an object
    // inside the array is another reference, hence, an array of subTodos
    subTodos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'subTodo'
        }
    ]
}, { timestamps: true }) 

export const todo = mongoose.model('Todo', todoSchema)