import express from 'express'

/**
 * `const express = require("express")` is synchronous import, old school syntax
 * that syntax is used in common js approach 
 * `import express from 'express'` is asynchronous code entry and is used in module js
 * */

const app = express()   // express for constant listening

// app.get('/', (req, res) => {
//     res.send('Server is ready')
// })

// get a list of five jokes
app.get('/api/jokes', (req, res) => {
    res.send(jokes)
})

const jokes = [
    {
        id: 1,
        title: 'first joke',
        content: 'this is the first joke'
    },
    {
        id: 2,
        title: 'second joke',
        content: 'this is the second joke'
    },
    {
        id: 3,
        title: 'third joke',
        content: 'this is the third joke'
    },
    {
        id: 4,
        title: 'fourth joke',
        content: 'this is the fourth joke'
    },
    {
        id: 5,
        title: 'fifth joke',
        content: 'this is the fifth joke'
    },
]

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})