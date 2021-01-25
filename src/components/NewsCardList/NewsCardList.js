import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard.js'
import { STEP_COUNT_NEWS } from '../../utils/config.js';

function NewsCardList({ loggedIn, pathname, news, savedNews, onSave, onLogin, onRemove }) {

    const [numberNews, setNumberNews] = React.useState(STEP_COUNT_NEWS);

    function showMoreNews() {
        setNumberNews(numberNews + STEP_COUNT_NEWS);
    }

    React.useEffect(() => { 
        setNumberNews(STEP_COUNT_NEWS);
    },[news])

    return (
        <section className="news__container">
            {
                pathname === "/saved-news"
                    ?
                    <>
                    <div className="cards__container">
                        {news.map((item, index) => 
                            <NewsCard
                            loggedIn={loggedIn}
                            pathname={pathname}
                            onRemove={onRemove}
                            savedNews={savedNews}
                            card={item}
                            key={item._id}
                            />
                        ).reverse()}
                    </div>
                    </>
                    :
                    <>
                        <h3 className="news__title">Результаты поиска</h3>
                        <div className="cards__container">
                            {news.slice(0, numberNews).map((item, index) => 
                                <NewsCard
                                loggedIn={loggedIn}
                                pathname={pathname}
                                onSave={onSave}
                                onLogin={onLogin}
                                onRemove={onRemove}
                                card={item}
                                savedNews={savedNews}
                                key={index}
                                />
                            )}
                        </div>
                        {
                            (news.length > numberNews)
                            &&
                            <button className="news__btn-add" onClick={showMoreNews}>Показать ещё</button>
                        } 
                        
                    </>
            }
        </section>
    )
}

export default NewsCardList;