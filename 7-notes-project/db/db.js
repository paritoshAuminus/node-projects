import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

export async function connectDB () {
    try {
        const dbResponse = await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connected!!")
    } catch (error) {
        console.log(`connectDB Error :: ${error}`)
    }
}


