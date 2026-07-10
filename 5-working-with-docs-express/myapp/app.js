import express from "express";
import myFunc from "./control.js";
import router from "./routes.js";

const app = express()
const port = 3000

// WRITING MIDDLEWARES
const myLogger = (req, res, next) => {
    console.log('LOGGED')
    console.log(Date())
    next()
}

const requestTime = (req, res, next) => {
    req.requestTime = Date()
    next()
}

// CREATING A MIDDLEWARE SUB-STACK
// NOTE - When it comes to middlewares, the route is optional as not giving a 
// route would cause the middleware to run on each request path
// app.use(
//     (req, res, next) => {
//         console.log('LOGGED REQ URL & TIME')
//         next()
//     },
//     (req, res, next) => {
//         console.log(`[${Date()}] ${req.url}`)
//         next()
//     }
// )

// Loading dedicated routes
app.use('/site', router)

// Loading middleware
app.use(myLogger)
app.use(requestTime) 

// NORMAL GET
// app.get('/', (req, res) => {
//     res.send("Just got a GET request.")
// })

// GET WITH RESPONDING WITH REQUEST TIME
app.get('/', (req, res) => {
    let responseText = 'This is the response with requestTime <br>'
    responseText += `<small>Requested at: ${req.requestTime}</small>`
    res.send(responseText)
})

// GET WITH A CONTROLLER OUTSIDE
// app.get('/', myFunc)

// GET WITH TWO CALLBACKS USING `next()` -> Getting error!! 
// app.get('/two_callbacks/:number', (req, res, next) => {
//     if (req.params.number != 1) {
//         res.send(`Handing control to next handler || Number: ${req.params.number}`)
//         next("route")
//     }
//     res.send("This is the first callback!")
// })

// app.get('/two_callbacks/:number', (req, res) => {
//     res.send(`I am the second callback! || Number: ${req.params.number}`)
// })

// TWO HANDLERS - ONE ROUTE -> FAILED
app.get('/two_handlers', (req, res, next) => {
    console.log("The control is transferred to the next handler.")
    next(),

        (req, res) => {
            res.send("This is the second handler")
        }
})

// PRINT REQUEST AND RESPONSE OBJECT 
app.get('/printReqObj', (req, res) => {
    res.send("Request object printed!!")
    console.log(req)
})

app.get('/printResObj', (req, res) => {
    res.send("Response object printed!!")
    console.log(res)
})

// ROUTE PATH WILDCARD
app.get('/wildcard/*superman', (req, res) => {
    console.dir(req.params.superman)
})

// ROUTE PARAMS
app.get('/params/:ironman', (req, res) => {
    res.send(req.params.ironman)
})

// DIFFERENT REQUEST METHODS
app.post('/post', (req, res) => {
    res.send("Just got a POST request.")
})

app.put('/put', (req, res) => {
    res.send("Just got a PUT request.")
})

app.delete('/delete', (req, res) => {
    res.send("Just got a DELETE request.")
})

// ARRAY OF HANDLERS FOR ONE ROUTE
app.get('/handler_array', [cb0, cb1, cb2], (req, res) => {
    console.log("This is the final anonymous handler")
    res.send("This is the final handler!!")
})

function cb0(req, res, next) { console.log("This is CB0"); next() }
function cb1(req, res, next) { console.log("This is CB1"); next() }
function cb2(req, res, next) { console.log("This is CB2"); next() }

// ARRAY OF HANDLER -> SECOND EXAMPLE
app.get('/handler_array_2', [
    cb0, cb1,
    (req, res, next) => {
        console.log("This is the third handler")
        next()
    },
    cb2,
    (req, res) => {
        console.log("This is the final handler")
        res.send("Final Handler for handler_array_2")
    }
])

// JSON RESPONSE
app.get('/json_response', (req, res) => {
    res.json({
        name: "Some name",
        age: 1626
    })
})

// WRITING MIDDLEWARE
app.use('/static/', express.static('public'))

app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
})

app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}/`)
})

export { app }