import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import '../style/Home.css'
import { useNavigate } from 'react-router-dom'
function Home() {
    const [password, setpassword] = useState()
    const navigate = useNavigate()
    function passToSubmitComplaintPage() {
        navigate('/submit')
    }

    async function adminEnter() {
        if (localStorage.getItem("token")) {
            navigate('/admin')
        }
        else {
            const verify = await fetch("http://localhost:3000/api/admin/login", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ password: password })
            }
            )
            const res = await verify.json()
            if (res.token) {
                localStorage.setItem("token", res.token)
                navigate('/admin')
            }
            else {
                navigate('/admin/login')
            }
        }
    }

    return (
        <>
            <Navbar text="Home Page" />
            <div className="home">
                <div className='complaint-box'>
                    <h2>תיבת תלונות אנונימיות בבסיס צבאי</h2>
                    <p>שלחו תלונה בצורה אנונימית ובטוחה</p>
                    <button onClick={passToSubmitComplaintPage} className='send-complaint'>שליחת תלונה </button>
                </div>
                <div className='admin-box'>
                    <h2>מפקדים בלבד</h2>
                    <div className="input-box">
                        <input type="password" onChange={(e) => setpassword(e.target.value)} /> :סיסמה
                    </div>
                    <button className='enter-btn' onClick={adminEnter}>כניסה לאדמין</button>
                </div>
            </div>
        </>
    )
}

export default Home