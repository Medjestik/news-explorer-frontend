import React, { useContext } from 'react';
import './Main.css';
import SearchPage from '../SearchPage/SearchPage.js';
import NewsCardList from '../NewsCardList/NewsCardList.js';
import Preloader from '../Preloader/Preloader.js';
import NotFoundNews from '../NotFoundNews/NotFoundNews.js';
import About from '../About/About.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Main({ loggedIn, onSearch, pathname, searchedNews, savedNews, isLoading, isFormFieldsBlocked, notFoundNews, onSave, onLogin, onRemove, setShowInfoPopup }) {

    useContext(CurrentUserContext);

    return (
        <main className="main">
            <SearchPage
                onSearch={onSearch}
                isFormFieldsBlocked={isFormFieldsBlocked}
                setShowInfoPopup={setShowInfoPopup}
            />
            { 
                (searchedNews.length > 0)
                &&    
                <NewsCardList
                    loggedIn={loggedIn}
                    pathname={pathname}
                    news={searchedNews}
                    savedNews={savedNews}
                    onSave={onSave}
                    onLogin={onLogin}
                    onRemove={onRemove}
                />
            }
            { 
                (isLoading)
                && 
                <Preloader />
            }
            {
                (notFoundNews.isShow)
                &&
                <NotFoundNews
                type={notFoundNews.type}
                />
            }
            <About />
        </main>
    )
}

export default Main;