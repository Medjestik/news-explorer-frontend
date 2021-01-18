import React from 'react';
import './SavedNews.css';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader.js'
import NewsCardList from '../NewsCardList/NewsCardList.js';

function SavedNews({ pathname }) {
    return (
        <main className="saved-news">
            <SavedNewsHeader />
            <NewsCardList 
                pathname={pathname}
            />
        </main>
    )
}

export default SavedNews;