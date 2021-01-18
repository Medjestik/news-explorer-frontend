import React from 'react';
import './Main.css';
import SearchPage from '../SearchPage/SearchPage.js';
import NewsCardList from '../NewsCardList/NewsCardList.js';
import About from '../About/About.js';

function Main({ pathname }) {
    return (
        <main className="main">
            <SearchPage />
            <NewsCardList
                pathname={pathname}
            />
            <About />
        </main>
    )
}

export default Main;