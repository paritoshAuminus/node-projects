import express from "express"
import mongoose from "mongoose"

const dbResponse = main()

const app = express()

const port = 3000

app.get('/', (req, res) => {
    // res.send("Hello express")
    res.json(dbResponse)
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})

async function main() {
    try {
        const dbResponse = await mongoose.connect("mongodb+srv://AuminusAdmin:9FidkSsGBV8Xs@cluster0.yc37ol8.mongodb.net/")
        return dbResponse
    } catch (error) {
        return `Database error :: ${error}`
    }
}