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
                <span className='brand-title'> Rabota vid Dimasssa </span>
            </section>
            <section>
                <ul
                    className="menubar"
                    id={!showmenu ? "" : "active"}
                >
                    <li><Link to="/">Головна</Link></li>
                    <li><Link to="/jobs">Пошук роботи</Link></li>
                    <li><Link to="">Сертифікати</Link></li>
                    <li><Link to="">Додати вакансію</Link></li>
                    <li><Link to="/policy">Про нас</Link></li>
                </ul>
            </section>
            <button
                type='button'
                className='button'
                id={!showmenu ? "" : "btn"}
                onClick={() => navigate("/register")}
            >
                Реєстрація
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