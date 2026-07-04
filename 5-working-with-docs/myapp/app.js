import express from "express";

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Just got a GET request.")
})

app.post('/post', (req, res) => {
    res.send("Just got a POST request.")
})

app.put('/put', (req, res) => {
    res.send("Just got a PUT request.")
})

app.delete('/delete', (req, res) => {
    res.send("Just got a DELETE request.")
})

app.use('/static/', express.static('public'))

app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
})

app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}/`)
})