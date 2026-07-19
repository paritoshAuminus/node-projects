import jwt from "jsonwebtoken";
import dotenv from 'dotenv'

dotenv.config()

export default function tokenGenerator(payload) {

    if (payload == undefined || payload == '') {
        return new Error("tokenGenerator :: payload is required for token to be generated!!")
    }
    
    const token = jwt.sign(payload, process.env.JWT_SECRET)
    return token;

}
