import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { User } from '../models/user.models.js'

dotenv.config()

export const tokenAuthenticator = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {
        return res.status(401).json({message: "token missing!"})
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
        if (err) {
            return res.status(401).json({message: "missing or invalid token!!"})
        }

        const trueUser = await User.findOne({_id: decoded.userId})

        if (!trueUser) {
            return res.status(401).json({message: "user doesn't exist"})
        }

        req.user = trueUser
        next()
    })
}