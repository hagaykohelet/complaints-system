export default function checkComplaint(req, res, next) {
    const allowKey = ["food", "commands", "equipment", "other"]
    const complaint = req.body
    const complaintKey = Object.keys(complaint)
    if (!(complaintKey.includes("category")) || !(complaintKey.includes("message"))) {
        return res.status(400).json({ msg: "this keys not allowed!" })
    }
    if (typeof complaint.category !== "string" || typeof complaint.message !== "string") {
        return res.status(400).json({ msg: "value error" })
    }
    if (!(allowKey.includes(complaint.category))) {
        return res.status(400).send("this category not allowed!")
    }
        next()
}