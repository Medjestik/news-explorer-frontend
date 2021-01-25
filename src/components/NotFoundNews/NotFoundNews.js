import React from 'react';
import './NotFoundNews.css';
import notFoundNewsImg from '../../images/not-found-news.png';

function NotFoundNews({ type }) {
    return (
        <figure className="not-found-news">
            <img className="not-found-news__img" src={notFoundNewsImg} alt="не найдено"></img>
            <figcaption className="not-found-news__caption">{`${type === "not-found" ? "Ничего не найдено" : "Во время запроса произошла ошибка"}`}</figcaption>
            <p className="not-found-news__text">{`${type === "not-found" ? "К сожалению по вашему запросу ничего не найдено." : "Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз."}`}</p>
        </figure>
    )
}

export default NotFoundNews;