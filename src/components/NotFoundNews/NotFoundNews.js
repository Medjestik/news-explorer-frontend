import React from 'react';
import './NotFoundNews.css';
import notFoundNews from '../../images/not-found-news.png';

function NotFoundNews() {
    return (
        <figure className="not-found-news">
            <img className="not-found-news__img" src={notFoundNews} alt="не найдено"></img>
            <figcaption className="not-found-news__caption">Ничего не найдено</figcaption>
            <p className="not-found-news__text">К сожалению по вашему запросу ничего не найдено.</p>
        </figure>
    )
}

export default NotFoundNews;