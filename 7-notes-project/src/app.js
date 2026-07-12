import express from "express"
import mongoose from "mongoose"
import { connectDB } from "../db/db.js"
import router from "../routes/routes.js"
import blackbox from "../middlewares/record.middlewares.js"

const port = 3000
const app = express()

// enabling json Parsing
app.use(express.json())

// Mongo DB connection
connectDB()

// blackbox for requests
app.use(blackbox)

app.use('/notes', router)

// App firing up
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})
