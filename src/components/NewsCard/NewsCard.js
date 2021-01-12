import React from 'react';
import './NewsCard.css';


function NewsCard({ pathname }) {
    return (
        <ul className="cards__container">
            <li className="card__item">
                <div className="card__menu">
                    <button className={`card__btn ${pathname === "/" ? "card__save" : "card__del"}`} type="button" />
                    <span className={`card__tooltip ${pathname === "/" ? "card__tooltip_font_small" : ""}`}>{`${pathname === "/" ? "Войдите, чтобы сохранять статьи" : "Убрать из сохраненных"}`}</span>
                    <span className={`card__tag ${pathname === "/" ? "card__tag_type_hidden" : ""}`}>Природа</span>
                </div>
                <img src="https://images.unsplash.com/photo-1519821172144-4f87d85de2a1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=631&q=80" className="card__img" alt="Изображение автора" />
                <div className="card__info">
                    <span className="card__date">2 августа, 2019</span>
                    <h4 className="card__title">Национальное достояние – парки</h4>
                    <p className="card__text">В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.</p>
                    <span className="card__source">Лента.ру</span>
                </div>
            </li>
            <li className="card__item">
                <div className="card__menu">
                    <button className={`card__btn ${pathname === "/" ? "card__save" : "card__del"}`} type="button" />
                    <span className="card__tooltip">{`${pathname === "/" ? "Войдите, чтобы сохранять статьи" : "Убрать из сохраненных"}`}</span>
                    <span className={`card__tag ${pathname === "/" ? "card__tag_type_hidden" : ""}`}>Фотография</span>
                </div>
                <img src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80" className="card__img" alt="Изображение автора" />
                <div className="card__info">
                    <span className="card__date">2 августа, 2019</span>
                    <h4 className="card__title">Лесные огоньки: история одной фотографии</h4>
                    <p className="card__text">Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.</p>
                    <span className="card__source">Медуза</span>
                </div>
            </li>
            <li className="card__item">
                <div className="card__menu">
                    <button className={`card__btn ${pathname === "/" ? "card__save" : "card__del"}`} type="button" />
                    <span className="card__tooltip">{`${pathname === "/" ? "Войдите, чтобы сохранять статьи" : "Убрать из сохраненных"}`}</span>
                    <span className={`card__tag ${pathname === "/" ? "card__tag_type_hidden" : ""}`}>Река</span>
                </div>
                <img src="https://images.unsplash.com/photo-1554481644-50d52b6fe742?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80" className="card__img" alt="Изображение автора" />
                <div className="card__info">
                    <span className="card__date">2 августа, 2019</span>
                    <h4 className="card__title">«Первозданная тайга»: новый фотопроект Игоря Шпиленка</h4>
                    <p className="card__text">Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где ещё очень очень очень много текста.</p>
                    <span className="card__source">Риа</span>
                </div>
            </li>
            <li className="card__item">
                <div className="card__menu">
                    <button className={`card__btn ${pathname === "/" ? "card__save" : "card__del"}`} type="button" />
                    <span className="card__tooltip">{`${pathname === "/" ? "Войдите, чтобы сохранять статьи" : "Убрать из сохраненных"}`}</span>
                    <span className={`card__tag ${pathname === "/" ? "card__tag_type_hidden" : ""}`}>Природа</span>
                </div>
                <img src="https://images.unsplash.com/photo-1519821172144-4f87d85de2a1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=631&q=80" className="card__img" alt="Изображение автора" />
                <div className="card__info">
                    <span className="card__date">2 августа, 2019</span>
                    <h4 className="card__title">Национальное достояние – парки</h4>
                    <p className="card__text">В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.</p>
                    <span className="card__source">Лента.ру</span>
                </div>
            </li>
            <li className="card__item">
                <div className="card__menu">
                    <button className={`card__btn ${pathname === "/" ? "card__save" : "card__del"}`} type="button" />
                    <span className="card__tooltip">{`${pathname === "/" ? "Войдите, чтобы сохранять статьи" : "Убрать из сохраненных"}`}</span>
                    <span className={`card__tag ${pathname === "/" ? "card__tag_type_hidden" : ""}`}>Фотография</span>
                </div>
                <img src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80" className="card__img" alt="Изображение автора" />
                <div className="card__info">
                    <span className="card__date">2 августа, 2019</span>
                    <h4 className="card__title">Лесные огоньки: история одной фотографии</h4>
                    <p className="card__text">Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.</p>
                    <span className="card__source">Медуза</span>
                </div>
            </li>
        </ul>
    )
}

export default NewsCard;