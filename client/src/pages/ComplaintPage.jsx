import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import '../style/ComplaintPage.css'
import Row from '../components/Table'
import { useNavigate } from 'react-router-dom'


function ComplaintPage() {
    const navigate = useNavigate()
    const [allComplaint, setAllComplaint] = useState([])

    async function fetchAllComplaint() {
        const data = await fetch("http://localhost:3000/api/complaints",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    token: localStorage.getItem("token")
                }
            }
        )
        
            const res = await data.json()
            setAllComplaint(res)
            console.log(localStorage.getItem("token"));
        
    }
    useEffect(() => {
        if(!localStorage.getItem("token")){
            navigate('/')
        }
        fetchAllComplaint()
    }, [])


    if (allComplaint.length === 0) {
        fetchAllComplaint()
    }

    return (
        <div className='allpage'>
            <Navbar text="Admin Complaints Page" />
            <div className="complaint-page">
                <h1>רשימת התלונות</h1>
                <div className="all-complaints">
                    <table>
                        <tr>
                            <th>תחום</th>
                            <th>תוכן התלונה</th>
                            <th>תאריך</th>
                        </tr>
                        {allComplaint.map((item) => {
                            return (
                                <Row category={item.category} message={item.message} createdAt={item.createdAt}></Row>
                            )
                        })}

                    </table>
                </div>
            </div>
        </div>
    )
}

export default ComplaintPage
