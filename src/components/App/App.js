import React from 'react';
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import SavedNews from '../SavedNews/SavedNews.js'
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';
import Popup from '../Popup/Popup.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';


function App() {
  const { pathname } = useLocation();
  const history = useHistory();

  const [loggedIn, setLoggedIn] = React.useState(true);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(false);
  const [isInfoPopupOpen, setIsInfoPopupOpen] = React.useState(false);

  function openLoginPopup() {
    setIsLoginPopupOpen(true);
  }

  function openRegisterPopup() {
    setIsRegisterPopupOpen(true);
  }

  function openInfoPopup() {
    setIsInfoPopupOpen(true);
  }

  function closeAllPopups() {
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(false);
    setIsInfoPopupOpen(false);
}

  function handleLogout () {
    setLoggedIn(false);
    history.push('/');
}

React.useEffect(() => { 
    function handleEscClose(e) {
        if (e.key === "Escape") {
          closeAllPopups();
        }
    }
  
    function closeByOverlay(e) {
        if (e.target.classList.contains('popup_opened')) {
          closeAllPopups();
        }
    }

    document.addEventListener('keyup', handleEscClose);
    document.addEventListener('click', closeByOverlay);

    return () => {
    document.removeEventListener('keyup', handleEscClose);
    document.removeEventListener('click', closeByOverlay);
    }
})

  return (
    <div className="page">
        <Header
          loggedIn={loggedIn}
          pathname={pathname}
          onLogout={handleLogout}
          onLogin={openLoginPopup}
        />

        <Switch>
          <Route exact path="/">
            <Main
              pathname={pathname}
            />
          </Route>

          <ProtectedRoute
            component={SavedNews}
            path="/saved-news"
            loggedIn={loggedIn}
            pathname={pathname}
          />
        </Switch>

        <Footer/>

        <Login
          isOpen={isLoginPopupOpen}
          onClose={closeAllPopups}
          onChangePopup={() => {
            closeAllPopups();
            openRegisterPopup();
          }}
        />

        <Register
          isOpen={isRegisterPopupOpen}
          onClose={closeAllPopups}
          onSubmit={() => {
            closeAllPopups();
            openInfoPopup();
          }}
          onChangePopup={() => {
            closeAllPopups();
            openLoginPopup();
          }}
        />

        <Popup
          isOpen={isInfoPopupOpen}
          onClose={closeAllPopups}
          onChangePopup={() => {
            closeAllPopups();
            openLoginPopup();
          }}
        />

    </div>
  );
}

export default App;
