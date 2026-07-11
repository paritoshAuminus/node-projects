import mongoose from "mongoose";

const kittySchema = new mongoose.Schema({
    name: String
})

export const Kitty = mongoose.model("Kitty", kittySchema)