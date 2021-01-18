import React from 'react';
import './Popup.css';

function Popup({ isOpen, onClose, onChangePopup }) {
    return (
        <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
            <div className="popup__container">
                  <button className="popup__close-button" onClick={onClose} type="button" />
                  <h2 className="popup__title">Пользователь успешно зарегистрирован!</h2>
                  <span className="popup__link" onClick={onChangePopup}>Войти</span>
              </div>
        </div>
    )
}

export default Popup;