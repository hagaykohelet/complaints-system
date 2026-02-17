import express from "express"
import complaintsRoute from "./complaints.js"
import adminRoute from "./admin.js"

const apiRoute = express()

apiRoute.use('/complaints', complaintsRoute)
apiRoute.use('/admin', adminRoute)


export default apiRoute