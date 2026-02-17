import express from "express"
import supabase from "../DB/connection.js"
import checkComplaint from "../middleware/check_complaint.js"
import { checkToken } from "../middleware/check_token.js"
const complaintsRoute = express()

const secretpassword = process.env.PASSWORD
const table = "complaints"


complaintsRoute.post('/', checkComplaint, async (req, res) => {
    try {
        const complaint = req.body
        complaint.createdAt = new Date().toISOString();
        const { data, error } = await supabase
            .from(table)
            .insert(complaint)
            .select()
        if (error) {
            return res.status(400).json({ msg: "error in db" })
        }
        return res.status(201).json({ msg: "your complaint save" })
    }
    catch(err){
        return res.status(400).json({error:String(err)})
    }
})


complaintsRoute.get('/', checkToken,async (req, res) => {
    const { data, error } = await supabase
        .from(table)
        .select()
    if (error) {
        return res.status(500).json({ msg: "error to get complaints" })
    }
    return res.status(200).send(data)
})



export default complaintsRoute