import bcrypt from "bcrypt"

const saltRounds = 10

async function hashPassword(input, saltrounds=saltRounds) {
    return await bcrypt.hash(input, saltrounds)
}

async function checkPassword(input, hashedPass) {
    return await bcrypt.compare(input, hashedPass)
}


export { hashPassword, checkPassword }