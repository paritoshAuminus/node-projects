import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

// MY WAY

export async function connectDB () {
    try {
        const dbResponse = await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connected!!")

    } catch (error) {
        console.log(`connectDB Error :: ${error}`)
    }
}


// THE DOCUMENTATION'S WAY -> Very detailed and extensive however similar error

// export async function connectDB () {
//     await mongoose.connect(process.env.MONGO_UR)
//     mongoose.connection.on('error', (error) => {
//         console.log(error)
//     })
// }
