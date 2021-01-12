import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard.js'

function NewsCardList({ pathname }) {
    return (
        <section className="news__container">
            {
                pathname === "/saved-news"
                    ?
                    <NewsCard
                    pathname={pathname}
                    />
                    :
                    <>
                        <h3 className="news__title">Результаты поиска</h3>
                        <NewsCard
                        pathname={pathname} 
                        />
                        <button className="news__btn-add">Показать ещё</button>
                    </>
            }
        </section>
    )
}

export default NewsCardList;