import express from "express"
import mongoose from "mongoose"

// const dbResponse = main()

main()

const app = express()

const port = 3000

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})

async function main() {

    try {
        const dbResponse = await mongoose.connect("mongodb+srv://AuminusAdmin:9FidkSsGBV8Xs@cluster0.yc37ol8.mongodb.net/")
        console.log("MongoDB connected!!")
        return dbResponse
        
    } catch (error) {
        console.error(`4. DB connection error :: ${error}`)
        return `Database error :: ${error}`
    }
}

app.get('/', (req, res) => {
    res.send("Hello express")
    // res.json(dbResponse)
})


const kittySchema = new mongoose.Schema({
    name: String
})

kittySchema.methods.speak = function () {
    console.log(`Meow name is ${this.name}`)
}

const Kitty = mongoose.model("Kitty", kittySchema)

const moustache = new Kitty({
    name: "Moustache"
})

const fluffy = new Kitty({
    name: "Fluffy"
})

const mrCoco = new Kitty({
    name: "Mr Coco"
})

const uncleJohn = new Kitty({
    name: "Uncle John"
})

moustache.speak()
fluffy.speak()
mrCoco.speak()
uncleJohn.speak()


async function saveToDb() {
    await moustache.save()
}

// saveToDb()

async function retrieveDb() {
    const kittens = await Kitty.find()
    console.log(kittens) 
}

// retrieveDb()

