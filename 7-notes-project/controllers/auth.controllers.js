import { User } from "../models/user.models.js"

// --------------------------------------------
// AUTHENTICATION CONTROLLERS
// --------------------------------------------

export const register = async (req, res) => {
    
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password

    if (!username || !email || !password) {
        return Error("register :: username, email and password all are required")
    }

    try {
        const response = await User.create({
            username: username,
            email: email,
            password: password
        })

        return res.json(response)

    } catch (error) {
        console.log(`Controllers :: register :: ${error}`)
    }
}
