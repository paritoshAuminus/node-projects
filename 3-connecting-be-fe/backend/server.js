// const express = require("express")  old syntax
import express from "express";

const app = express()

const jokes = [
    {
        id:1,
        title: "Joke 1",
        content: "This is the content for joke 1."
    },
    {
        id:2,
        title: "Joke 2",
        content: "This is the content for joke 2."
    },
    {
        id:3,
        title: "Joke 3",
        content: "This is the content for joke 3."
    },
    {
        id:4,
        title: "Joke 4",
        content: "This is the content for joke 4."
    },
    {
        id:5,
        title: "Joke 5",
        content: "This is the content for joke 5."
    },
]

// app.get('/', (req, res) => {
//     res.send("Server is ready!")
// })

app.get('/jokes', (req, res) => {
    res.send(jokes)
})

const port = process.env.port || 3000

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})

