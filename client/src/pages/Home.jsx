import React from 'react'
import Navbar from '../components/Navbar'
import '../style/Home.css'
function Home() {
    return (
        <>
            <Navbar text="Home Page" />
            <div className="home">
                <div className='complaint-box'>
                    <h2>תיבת תלונות אנונימיות בבסיס צבאי</h2>
                    <p>שלחו תלונה בצורה אנונימית ובטוחה</p>
                    <button className='send-complaint'>שליחת תלונה </button>
                </div>
                <div className='admin-box'>
                    <h2>מפקדים בלבד</h2>
                    <div className="input-box">
                        <input type="password" /> :סיסמה
                    </div>
                    <button className='enter-btn'>כניסה לאדמין</button>
                </div>
            </div>
        </>
    )
}

export default Home