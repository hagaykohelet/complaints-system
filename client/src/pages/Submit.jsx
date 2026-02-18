import { useState } from "react"
import Navbar from "../components/Navbar"
import '../style/Submit.css'
function Submit() {
    const [flag, setFlag] = useState(false)
    const [category, setCategory] = useState()
    const [message, setMessage] = useState()
    async function sendComplaint() {
        
        console.log(category)
        const data = await fetch("http://localhost:3000/api/complaints", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ category: category, message: message })
        })
        if (data.ok) {
            setFlag(true)
        }

    }
    return (
        <div className="submit-page">
            <Navbar text="Submit Complaint Page" />
            <div className="page-send-complaint">
                <h1>שליחת תלונות אנונימיות</h1>
                <div className="complaint-area">
                    <p>תחום התלונה</p>
                    <select name="complaint-category" lang="he" dir="rtl" id="complaint-category" onChange={(e) => setCategory(e.target.value)}>
                        <option style={{display: "none"}}></option>
                        <option value="food">אוכל</option>
                        <option value="commands">פקודות</option>
                        <option value="equipment">ציוד</option>
                        <option value="other">אחר</option>
                    </select>
                </div>
                <div className="complaint-content">
                    <p>תוכן התלונה</p>
                    <textarea name="comlplaint-content" lang="he" dir="rtl" id="complaint-content" placeholder="סיבת התלונה שלך" onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>
                <button className="send-btn" onClick={sendComplaint}>שליחה</button>
                {flag && <div className="message"><p >התלונה נשלחה בהצלחה</p></div>}
            </div>
        </div>
    )
}
export default Submit