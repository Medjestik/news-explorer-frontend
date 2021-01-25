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
import PageRender from '../PageRender/PageRender.js'
import * as newsApi from '../../utils/NewsApi.js';
import * as mainApi from '../../utils/MainApi.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';


function App() {
  const { pathname } = useLocation();
  const history = useHistory();

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isRendering, setIsRendering] = React.useState(false);
  const [isLoadingNews, setIsLoadingNews] = React.useState(false);
  const [notFoundNews, setNotFoundNews] = React.useState({ type: '', isShow: false });
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(false);
  const [isFormFieldsBlocked, setIsFormFieldsBlocked] = React.useState(false);
  const [searchedNews, setSearchedNews] = React.useState([]);
  const [savedNews, setSavedNews] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({});
  const [showInfoPopup, setShowInfoPopup] = React.useState({ text: '', link: false, isOpen: false });
  const [showErrorForm, setShowErrorForm] = React.useState({ errStatus: '', isShow: false });

  function handleRegister ({ email, password, name }) {
    setIsFormFieldsBlocked(true);
    mainApi.register({ email, password, name })
      .then(() => {
        closeAllPopups();
        setShowInfoPopup({ text: 'Пользователь успешно зарегистрирован!', link: true, isOpen: true });
      })
      .catch((err) => {
        setShowErrorForm({ errText: identifyError(err.status), isShow: true });
      })
      .finally(() => {
        setIsFormFieldsBlocked(false);
      });
  }

  function handleLogin ({ email, password }) {
    setIsFormFieldsBlocked(true);
    mainApi.login({ email, password })
      .then((res) => {
        localStorage.setItem("token", res.token);
        closeAllPopups();
        tokenCheck();
        setSearchedNews([]);
      })
      .catch((err) => {
        setShowErrorForm({ errText: identifyError(err.status), isShow: true });
      })
      .finally(() => {
        setIsFormFieldsBlocked(false);
      });
  }

  function tokenCheck () {
    const token = localStorage.getItem("token");
    if (token) {
      mainApi.getMe({ token: token })
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            setCurrentUser(res);
          } else {
            localStorage.removeItem("token");
            setLoggedIn(false);
            setCurrentUser({});
          }
        })
        .catch((err) => {
            console.error(err);
        });
    }
  }

  React.useEffect(() => {
    const localStorageNews = localStorage.getItem("news");
    if (localStorageNews) {
      setSearchedNews(JSON.parse(localStorageNews));
    } else {
      return;
    }
  }, []);

  React.useEffect(() => {
    setIsRendering(true);
    const token = localStorage.getItem("token");
    if (loggedIn) {
        Promise.all([mainApi.getMe({ token }), mainApi.getNews({ token })])
        .then(([userInfo, savedCards]) => {
            setCurrentUser(userInfo);
            setSavedNews(savedCards);
        })
        .catch((err) => {
            console.error(err);
        })
        .finally(() => {
          setIsRendering(false);
        })
    }
  }, [loggedIn]);

  React.useEffect(() => {
    tokenCheck();
  }, []);

  const identifyError = (errorStatus) => {
    switch (errorStatus) {
        case 400: 
            return "Неверные параметры запроса!";
        case 401: 
            return "Неправильная почта или пароль!";
        case 409: 
            return "Пользователь с такими данными уже существует!";
        default:
            return "Что-то пошло не так! Попробуйте еще раз!";
    }
  }


  function handleSearchNews(keyword) {
    setIsFormFieldsBlocked(true);
    setIsLoadingNews(true);
    setNotFoundNews(false);
    newsApi.getNews(keyword)
    .then((res) => {
      const foundNews = (res.articles.map((item) => ({
        keyword: keyword,
        title: item.title,
        text: item.description,
        date: item.publishedAt,
        source: item.source.name,
        link: item.url,
        image: item.urlToImage,
      })));
      setSearchedNews(foundNews);
      localStorage.setItem("news", JSON.stringify(foundNews));
      if (foundNews.length === 0) {
        setNotFoundNews({ type: "not-found", isShow: true });
      }
    })
    .catch(() => {
      setNotFoundNews({ type: "req-error", isShow: true });
      
    })
    .finally(() => {
      setIsFormFieldsBlocked(false);
      setIsLoadingNews(false);
    })
  }

  function handleSaveNews(news) {
    if (loggedIn) {
      mainApi.createNews(news.keyword, news.title, news.text, news.date, news.source, news.link, news.image, localStorage.token)
      .then((res) => {
        setSavedNews([...savedNews, res])
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }

  function handleRemoveNews(news) {
    if (loggedIn) {
      mainApi.removeNews(news._id, localStorage.token)
      .then(() => {
        const otherNews = savedNews.filter(item => item._id !== news._id);
        setSavedNews(otherNews);
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }

  function openLoginPopup() {
    closeAllPopups();
    setIsLoginPopupOpen(true);
  }

  function openRegisterPopup() {
    closeAllPopups();
    setIsRegisterPopupOpen(true);
  }

  function closeAllPopups() {
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(false);
    setShowInfoPopup({ ...showInfoPopup, isOpen: false });
    setShowErrorForm({ errStatus: '', isShow: false });
}

  function handleLogout () {
    localStorage.removeItem('token');
    setLoggedIn(false);
    setCurrentUser({});
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
    isRendering && (loggedIn === true || false)
    ?
    <PageRender />
    :
    <CurrentUserContext.Provider value={currentUser}>
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
                loggedIn={loggedIn}
                pathname={pathname}
                onSearch={handleSearchNews}
                searchedNews={searchedNews}
                savedNews={savedNews}
                isLoading={isLoadingNews}
                isFormFieldsBlocked={isFormFieldsBlocked}
                notFoundNews={notFoundNews}
                onSave={handleSaveNews}
                onLogin={openLoginPopup}
                onRemove={handleRemoveNews}
                setShowInfoPopup={setShowInfoPopup}
              />
            </Route>

            <ProtectedRoute
              component={SavedNews}
              path="/saved-news"
              loggedIn={loggedIn}
              pathname={pathname}
              savedNews={savedNews}
              onRemove={handleRemoveNews}
            />
          </Switch>

          <Footer/>

          <Login
            isOpen={isLoginPopupOpen}
            onClose={closeAllPopups}
            onLogin={handleLogin}
            isFormFieldsBlocked={isFormFieldsBlocked}
            showErrorForm={showErrorForm}
            onChangePopup={() => {
              closeAllPopups();
              openRegisterPopup();
            }}
          />

          <Register
            isOpen={isRegisterPopupOpen}
            onClose={closeAllPopups}
            onRegister={handleRegister}
            isFormFieldsBlocked={isFormFieldsBlocked}
            showErrorForm={showErrorForm}
            onChangePopup={openLoginPopup}
          />

          <Popup
            onClose={closeAllPopups}
            onShow={showInfoPopup}
            onChangePopup={openRegisterPopup}
          />

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
