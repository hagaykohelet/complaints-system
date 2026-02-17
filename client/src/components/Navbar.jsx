import React from 'react'
import '../style/Navbar.css'
function Navbar({text}) {
    
    return (
    <div className='navbar'>
        <h1>{text}</h1>
    </div>
)
}

export default Navbar