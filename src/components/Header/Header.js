import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation.js';
import logoWhite from '../../images/logo-white.svg';
import logo from '../../images/logo-dark.svg';

function Header({ loggedIn, pathname, onLogout, onLogin }) {
    return (
        <header className={`header ${pathname === "/" ? "header_type_main" : "header_type_saved-news"}`}>
            <Link to="/"><img className="header__logo" src={`${pathname === "/" ? logoWhite : logo}`} alt="Логотип" /></Link>
            <Navigation
                loggedIn={loggedIn}
                pathname={pathname}
                onLogout={onLogout}
                onLogin={onLogin}
            />
        </header>
    )
}

export default Header;