import Navbar from "../components/Navbar"
import '../style/Submit.css'
function Submit() {
    const flag = true
    return (
        <div className="submit-page">
            <Navbar text="Submit Complaint Page" />
            <div className="page-send-complaint">
                <h1>שליחת תלונות אנונימיות</h1>
                <div className="complaint-area">
                    <p>תחום התלונה</p>
                    <select name="complaint-category" lang="he" dir="rtl" id="complaint-category">
                        <option value="food">אוכל</option>
                        <option value="commands">פקודות</option>
                        <option value="equipment">ציוד</option>
                        <option value="other">אחר</option>
                    </select>
                </div>
                <div className="complaint-content">
                    <p>תוכן התלונה</p>
                    <textarea name="comlplaint-content" lang="he" dir="rtl" id="complaint-content" placeholder="סיבת התלונה שלך"></textarea>
                </div>
                <button className="send-btn">שליחה</button>
                {flag && <div><p>התלונה נשלחה בהצלחה</p></div>}
            </div>
        </div>
    )
}
export default Submit