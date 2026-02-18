import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import '../style/AdminLogin.css'
import { useNavigate } from 'react-router-dom'
function AdminLogin() {
    const [flag, setFlag] = useState(false)
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    async function adminEnter() {
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
            setFlag(true)
        }

    }
    return (
        <div className='login-page'>
            <Navbar text="Admin Login Page" />
            <div className="login-box">
                <h1>כניסה לאדמין</h1>
                <div className="content-login">
                    <div className="input-box">
                        <input type="password" onChange={(e) => setPassword(e.target.value)} /> :סיסמה
                    </div>

                    <button className='connnect' onClick={adminEnter}>התחברות</button>
                </div>
                {flag && <div className="error-message"><p>.סיסמה שגויה,נסה שוב</p></div>}
            </div>
        </div>
    )
}

export default AdminLogin