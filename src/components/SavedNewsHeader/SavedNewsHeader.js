import React from 'react';
import './SavedNewsHeader.css';

function SavedNewsHeader() {
    return (
        <section className="saved-news__header">
            <h5 className="saved-news__subtitle">Сохранённые статьи</h5>
            <h1 className="saved-news__title">Грета, у вас 5 сохранённых статей</h1>
            <p className="saved-news__caption">По ключевым словам: <span className="saved-news__caption_weight_bold">Природа, Тайга</span> и <span className="saved-news__caption_weight_bold">2-м другим</span></p>
        </section>
    )
}

export default SavedNewsHeader;