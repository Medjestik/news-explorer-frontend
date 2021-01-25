import React from 'react';
import './SearchPage.css';
import SearchForm from '../SearchForm/SearchForm.js'

function SearchPage({ onSearch, isFormFieldsBlocked, setShowInfoPopup }) {
    return (
        <section className="search__page">
            <div className="search__container">
                <h1 className="search__title">Что творится в мире?</h1>
                <p className="search__subtitle">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
                <SearchForm
                    onSearch={onSearch}
                    isFormFieldsBlocked={isFormFieldsBlocked}
                    setShowInfoPopup={setShowInfoPopup}
                />
            </div>
        </section>
    )
}

export default SearchPage;