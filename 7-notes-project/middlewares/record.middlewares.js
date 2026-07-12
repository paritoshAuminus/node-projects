const blackbox = (req, res, next) => {
    console.log(`[${Date()}] ${req.url}`)
    next()
}

export default blackbox