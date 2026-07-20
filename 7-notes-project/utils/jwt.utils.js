import jwt from "jsonwebtoken";
import dotenv from 'dotenv'

dotenv.config()

export default function accessTokenGenerator(payload) {

    if (payload == undefined || payload == '') {
        return new Error("tokenGenerator :: payload is required for token to be generated!!")
    }
    
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: '120m'
    })
    return token;

}
