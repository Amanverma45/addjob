import React from 'react'
import { Link } from 'react-router-dom'
import './Style/Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                <img src="./public/Images/JP.png" alt="jp" />
            </div>
            <div className='links'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/job">Job</Link>
                <Link to="/services">Services</Link>
                <Link to="/client">Client</Link>
                {/* <Link to="/contact">Contact</Link> */}
                <Link to="/Register">
                    <button>Register</button>
                </Link>
                <Link to="/login">
                    <button>Login</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar

