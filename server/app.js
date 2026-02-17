import express from "express"
import cors from "cors"
import apiRoute from "./routes/api.js"
import supabase from "./DB/connection.js"
import 'dotenv/config'

const app = express()
const PORT = 3000

app.use(express.json())
app.use(cors())
app.use('/api', apiRoute)


app.listen(PORT, () => {
    console.log("server run....");
})