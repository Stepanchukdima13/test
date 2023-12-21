import React, { useState } from 'react';
import logo from "../assets/logo.svg"
import { Link, useNavigate } from 'react-router-dom';
import barsIcon from "../assets/bars.svg"
import xIcon from "../assets/x-solid.svg"


function Navbar() {

    const navigate = useNavigate()
    const [showmenu, setShowmenu] = useState(false)


    return (
        <nav className='navbar'>
            <section className='brand' onClick={() => navigate("/")}>
                <img src={logo} alt="brand-logo" className='brand-logo' />
                <span className='brand-title'> Jobsy </span>
            </section>
            <section>
                <ul
                    className="menubar"
                    id={!showmenu ? "" : "active"}
                >
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/jobs">Jobs</Link></li>
                    <li><Link to="">Membership</Link></li>
                    <li><Link to="">Post a Job</Link></li>
                    <li><Link to="/policy">Guidance</Link></li>
                </ul>
            </section>
            <button
                type='button'
                className='button'
                id={!showmenu ? "" : "btn"}
                onClick={() => navigate("/register")}
            >
                Sign Up
            </button>
            <img
                src={!showmenu ? barsIcon : xIcon}
                className='mob'
                onClick={() => setShowmenu(!showmenu)}
            />
        </nav>
    );
}

export default Navbar;