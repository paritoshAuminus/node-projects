import bcrypt, { hash } from "bcrypt"

async function hashpass(text, saltrounds) {
    const hashed = await bcrypt.hash(text, saltrounds)
    console.log(hashed)
}

// hashpass("testpass", 10)

async function hashPassword(input, saltrounds) {
    return await bcrypt.hash(input, saltrounds)
}

async function checkPassword(input, hashedPass) {
    return await bcrypt.compare(inpout, hashedPass)
}

