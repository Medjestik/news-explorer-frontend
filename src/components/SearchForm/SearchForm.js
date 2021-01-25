import React from 'react';
import './SearchForm.css';


function SearchForm({ onSearch, isFormFieldsBlocked, setShowInfoPopup }) {

    const [keyword, setKeyword] = React.useState('');

    function searchNews(e) {
        e.preventDefault();

        if (keyword === "") {
            setShowInfoPopup({ text: 'Поле ввода не может быть пустым!', link: false, isOpen: true });
        } else {
            onSearch(keyword);
        }
        
    }

    function handleInputChange(e) {
        setKeyword(e.target.value);
    }   

    return (
        <form className="search__form" name="search-news" action="#" noValidate onSubmit={searchNews}>
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
            onChange={handleInputChange}
            disabled={isFormFieldsBlocked}
            />
            <button className="search__btn" type="submit">Искать</button>
        </form>
    )
}

export default SearchForm;