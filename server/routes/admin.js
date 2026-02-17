import express from "express"
import 'dotenv/config'
import createToken from "../utills/createToken.js"
const adminRoute = express()
const secretpassword = process.env.PASSWORD

adminRoute.post('/login', (req, res) => {
    const { password } = req.body
    if (password !== secretpassword) {
        return res.status(401).json({ msg: "unauthorized" })
    }
    const token = createToken()
    return res.status(200).json({authorized:"ok",
        token:token
    })
})


export default adminRoute

