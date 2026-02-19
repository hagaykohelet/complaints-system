import jwt from "jsonwebtoken";
import 'dotenv/config'


const secretKey = process.env.SECRET_KEY_TOKEN
export default function createToken() {
    return jwt.sign({ role: "admin" }, secretKey, { expiresIn: '5s' })
}




