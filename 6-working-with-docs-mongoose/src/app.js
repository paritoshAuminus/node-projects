import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

// const dbResponse = main()

main()

const app = express()

const port = 3000

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})

async function main() {

    try {
        const dbResponse = await mongoose.connect(`${process.env.MONGO_URI}`)
        console.log("MongoDB connected!!")
        return dbResponse

    } catch (error) {
        console.error(`DB connection error :: ${error}`)
        return `Database error :: ${error}`
    }
}

app.get('/', (req, res) => {
    res.send("Hello express")
    // res.json(dbResponse)
})


const kittySchema = new mongoose.Schema({
    name: String
},
    {
        statics: {
            roar() {
                console.log(`${this.name} says WRRAARRR!!`)
            }
        }
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
// fluffy.roar()
// mrCoco.sleep()


async function saveToDb() {
    await moustache.save()
}

// saveToDb()

async function deleteDbInstance(object) {
    await object.deleteOne()
}

// deleteDbInstance(moustache)

async function retrieveDb() {
    const kittens = await Kitty.find()
    console.log(kittens)
}

retrieveDb()

