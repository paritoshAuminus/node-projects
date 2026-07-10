import express from "express"

// Predefined router function to create and manage routes separately and modularly
const router = express.Router()

router.use((req, res, next) => {
    console.log(`[Time: ${Date()}]`)
    next()
})

router.get('/home', (req, res) => {
    res.json("This is home")
})
router.get('/about', (req, res) => {
    res.json("This is about")
})
router.get('/contact', (req, res) => {
    res.json("This is contact")
})

router.get('/products', (req, res) => {
    res.json({
        "Product1": {
            id: 1,
            price: 23,
            title: "Product 1",
            description: "This is the first product"
        },
        "Product2": {
            id: 2,
            price: 42,
            title: "Product 2",
            description: "This is the second product"
        }
    })
})

export default router