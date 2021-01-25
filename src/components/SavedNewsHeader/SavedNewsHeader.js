import React from 'react';
import './SavedNewsHeader.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

function SavedNewsHeader({ savedNews }) {

    const { name: userName } = React.useContext(CurrentUserContext);

    const keywords = savedNews.map(item => item.keyword);

    const uniqueKeywords = keywords.reduce((prevValue, currentValue) => {
        let uniqueValue = prevValue;
        uniqueValue[currentValue] ? uniqueValue[currentValue] += 1 : uniqueValue[currentValue] = 1;

        return uniqueValue;
      }, {});
    
    const sortedKeywords = Object.keys(uniqueKeywords).sort(function(a,b) {
        return uniqueKeywords[b]-uniqueKeywords[a];
    });

    function getCountNews (newsArray) {

        let length = newsArray.length;

        switch (newsArray.length) {
            case 0: 
                return (<h1 className="saved-news__title">{`${userName}, у вас пока нет сохранённых статей`}</h1>);
            case 1: 
                return (<h1 className="saved-news__title">{`${userName}, у вас одна сохраненная статья`}</h1>);
            case 2:
            case 3:
            case 4:
                return (<h1 className="saved-news__title">{`${userName}, у вас ${length} сохраненные статьи`}</h1>);
            default:
                return (<h1 className="saved-news__title">{`${userName}, у вас ${length} сохранённых статей`}</h1>);
        }
    }

    function getCountKeywords (keywordsArray) {

        switch (keywordsArray.length) {
            case 0: 
                return;
            case 1: 
                return (<p className="saved-news__caption">По ключевому слову: <span className="saved-news__caption_weight_bold">{sortedKeywords[0]}</span></p>);
            case 2:
                return (<p className="saved-news__caption">По ключевым словам: <span className="saved-news__caption_weight_bold">{sortedKeywords[0]}, {sortedKeywords[1]}</span></p>);
            case 3:
                return (<p className="saved-news__caption">По ключевым словам: <span className="saved-news__caption_weight_bold">{sortedKeywords[0]}, {sortedKeywords[1]}, {sortedKeywords[2]}</span></p>);
            default:
                return (<p className="saved-news__caption">По ключевым словам: <span className="saved-news__caption_weight_bold">{sortedKeywords[0]}, {sortedKeywords[1]}</span> и <span className="saved-news__caption_weight_bold">{sortedKeywords.length - 2}-м другим</span></p>);
        }
    }

    return (
        <section className="saved-news__header">
            <h5 className="saved-news__subtitle">Сохранённые статьи</h5>
            {getCountNews(savedNews)}
            {getCountKeywords(sortedKeywords)}
        </section>
    )
}

export default SavedNewsHeader;