import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';
import logoutWhite from '../../images/logout-white.png';
import logout from '../../images/logout-black.png';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

function Navigation({ loggedIn, pathname, onLogout, onLogin }) {


    const { name: userName } = React.useContext(CurrentUserContext);
    const [windowWidth, setWindowWidth] = React.useState(0);
    const [showMenu, setShowMenu] = React.useState(false);

    React.useEffect(() => {
        function resizeWindow (evt) {
          setWindowWidth(evt.target.innerWidth);
        }
  
        window.addEventListener('resize', resizeWindow);
  
        return () => {
          window.removeEventListener('resize', resizeWindow);
        }
      }, []);

      React.useEffect(() => {
        setWindowWidth(window.innerWidth);
        if (windowWidth > 600) {
            setShowMenu(false);
        }
    }, [windowWidth])

    const navMenu = (
        <>
            <li className={`nav__item ${pathname === "/" ? "nav__item_type_white nav__item_active" : ""} ${windowWidth < 600 ? "nav__item_type_mobile" : ""}`}>
                <NavLink className={`nav__link ${pathname === "/" ? "nav__link_type_white" : ""}`} exact to="/">Главная</NavLink>
            </li>
            {loggedIn
                ?
                <>
                    <li className={`nav__item ${pathname === "/" ? "nav__item_type_white" : ""} ${pathname === "/saved-news" ? "nav__item_active" : ""} ${windowWidth < 600 ? "nav__item_type_mobile" : ""}`}>
                        <NavLink className={`nav__link ${pathname === "/" ? "nav__link_type_white" : ""}`} to="/saved-news">Сохранённые статьи</NavLink>
                    </li>
                    <li className="nav__item">
                        <button 
                        className={`nav__btn ${pathname === "/" ? "nav__btn_type_white" : ""} ${windowWidth < 600 ? "nav__btn_type_mobile" : ""}`}
                        onClick={onLogout}>
                        {userName}&nbsp;
                        <img className="logout-icon" src={`${pathname === "/" ? logoutWhite : logout}`} alt="Выход" />
                        </button>
                    </li>
                </>
                :
                <li className="nav__item">
                    <button className={`nav__btn ${pathname === "/" ? "nav__btn_type_white" : ""} ${windowWidth < 600 ? "nav__btn_type_mobile" : ""}`} onClick={onLogin}>Авторизоваться</button>
                </li>
            }
        </>
    )

    function getMenu (windowWidth) {
        if (windowWidth > 600) { 
            return (
                <>                    
                    <ul className="nav__container">
                        {navMenu}
                    </ul>
                </>
          )
        } else {
            return (
                <>      
                {showMenu
                ? <button className={`nav-mobile__button nav-mobile__button_menu_hide ${pathname === "/saved-news" ? "nav-mobile__button_type_black" : ""}`} type="button" onClick={() => setShowMenu(false)} />
                : <button className={`nav-mobile__button nav-mobile__button_menu_show ${pathname === "/saved-news" ? "nav-mobile__button_type_black" : ""}`} type="button" onClick={() => setShowMenu(true)} />
                }         
                <ul className={`nav-mobile__container nav-mobile__container_type_${showMenu ? 'show' : 'hide'} ${pathname === "/saved-news" ? "nav-mobile__container_type_white" : ""}`}>{navMenu}</ul>
                </>
            ) 
        }
    }

    return (
        getMenu(windowWidth)
    )
}

export default Navigation;