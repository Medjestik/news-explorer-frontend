import React from 'react';
import './SavedNews.css';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader.js'
import NewsCardList from '../NewsCardList/NewsCardList.js';

function SavedNews({ loggedIn, pathname, savedNews, onRemove }) {
    return (
        <main className="saved-news">
            <SavedNewsHeader
            savedNews={savedNews}
             />
            { 
                (savedNews.length > 0)
                &&
                <NewsCardList
                loggedIn={loggedIn}
                pathname={pathname}
                news={savedNews}
                onRemove={onRemove}
            />
            }
            
        </main>
    )
}

export default SavedNews;