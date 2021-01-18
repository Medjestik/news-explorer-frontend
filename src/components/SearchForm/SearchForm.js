import React from 'react';
import './SearchForm.css';

function SearchForm() {
    return (
        <form className="search__form" name="search-news" action="#" noValidate>
            <input 
            className="search__input"
            placeholder="Введите тему новости"
            type="text" 
            id="search"
            name="search"
            minLength="2" 
            maxLength="40" 
            required 
            pattern="[A-Za-zА-Яа-яЁё -]{1,}" 
            />
            <button className="search__btn" type="submit">Искать</button>
        </form>
    )
}

export default SearchForm;