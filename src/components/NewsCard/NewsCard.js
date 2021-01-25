import React from 'react';
import './NewsCard.css';
import { DEFAULT_NEWS_IMG } from '../../utils/config.js';

function NewsCard({ loggedIn, pathname, onSave, onLogin, onRemove, card, savedNews }) {

    const convertDate = new Date(card.date).toLocaleString('ru', { month: 'long', day: 'numeric', }) + ', ' + new Date(card.date).toLocaleString('sv', { year: 'numeric', });

    function isValidUrl(url) {
        const regExp = /(^https?:\/\/)?[a-z0-9~_\-.]+\.[a-z]{2,9}(\/|:|\?[!-~]*)?$/i;

        return regExp.test(url);
    }

    function handleSaveNews() {
        onSave(card);
    }

    function handleRemoveNews() {
        onRemove(card);
    }

    function handleRemoveMarkedNews() {
        const removeCard = savedNews.find((item) => item.link === card.link);
        onRemove(removeCard);
    }

    

    return (
        <div className="card__item">
            <div className="card__menu">
                {
                    loggedIn
                    ?
                        pathname === "/" 
                        ?
                        savedNews.some((item) => item.link === card.link)
                            ?
                            <>
                                <button className="card__btn card__btn_type_saved" type="button" onClick={handleRemoveMarkedNews} />
                                <span className="card__tooltip">Убрать из сохраненных</span>
                            </>
                            :
                            <>
                                <button className="card__btn card__btn_type_save" type="button" onClick={handleSaveNews} />
                                <span className="card__tooltip">Сохранить статью</span>
                            </>
                        :
                        <>
                            <button className="card__btn card__btn_type_remove" type="button" onClick={handleRemoveNews} />
                            <span className="card__tooltip">Убрать из сохраненных</span>
                            <span className="card__tag">{card.keyword}</span>
                        </>
                    :
                    <>
                        <button className="card__btn" type="button" onClick={onLogin} />
                        <span className="card__tooltip card__tooltip_font_small">Войдите, чтобы сохранять статьи</span>
                    </>
                }
            </div>
            <a className="card__link" href={card.link} rel="noreferrer" target="_blank">
                <img src={isValidUrl(card.image) ? card.image : DEFAULT_NEWS_IMG} className="card__img" alt="Картинка новости" />
                <div className="card__info">
                    <span className="card__date">{convertDate}</span>
                    <h4 className="card__title">{card.title}</h4>
                    <p className="card__text">{card.text}</p>
                    <span className="card__source">{card.source}</span>
                </div>
            </a>
        </div>
    )
}

export default NewsCard;