import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../Assets/logo.jpg'
import '../Styles/Components/Header.css'

const Header = () => {
    return (
        <div className="header">
            <NavLink to="/">
                <div className="header__divImg">
                    <img
                        className="header__divImg__img"
                        src={logo}
                        alt="Kasa"
                    />
                </div>
            </NavLink>
            <div className="header__divLink">
                <ul className="header__divLink__ul">
                    <NavLink to="/">
                        <li className="header__divLink__ul__li">Accueil</li>
                    </NavLink>
                    <NavLink to="/about">
                        <li className="header__divLink__ul__li"> A Propos</li>
                    </NavLink>
                </ul>
            </div>
        </div>
    )
}

export default Header
