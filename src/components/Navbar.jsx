import React from 'react'
import "./Navbar.css"
const Navbar = () => {
    return (
        <nav>
            <div className='navbar'>
                <div className="opac-nav"></div>
                <div className="logo-sec">
                    <img src="/logo.jpeg" alt="logo" />
                    <h1>Weather App</h1>
                </div>
                <div className="signlinks">
                    <ul>
                        <li>Log In</li>
                        <li>Sign In</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
