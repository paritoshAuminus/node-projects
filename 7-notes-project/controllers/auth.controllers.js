import { User } from "../models/user.models.js"
import accessTokenGenerator from "../utils/jwt.utils.js"

// --------------------------------------------
// AUTHENTICATION CONTROLLERS
// --------------------------------------------


// [POST] (Public) register user - username, email and password
export const register = async (req, res) => {
    
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password

    if (!username || !email || !password) {
        return res.status(400).json({message: "username, email and password all are required"})
    }

    try {
        const response = await User.create({
            username: username,
            email: email,
            password: password
        })

        return res.status(201).json({userId: response.__id, username: response.username, email: response.email})

    } catch (error) {
        console.log(`Controllers :: register :: ${error}`)
        return res.status(404).json({message: error})
    }
}


// [POST] (Public) login user - username & password - return access token
export const login = async (req, res) => {
    
    const username = req.body.username
    const password = req.body.password

    if (!username || !password) {
        return res.status(400).json({message: "Username and Password are both required"})
    }

    const user = await User.findOne({username: username})

    if (user.username == username && user.password == password) {

        const token = accessTokenGenerator({userId: user._id, username: user.username, email: user.email})
        return res.status(200).json({accessToken: token})

    } else {
        return res.status(401).json({message: "Invalid username or password"})
    }
}
