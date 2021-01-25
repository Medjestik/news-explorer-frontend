import React from 'react';
import './Popup.css';

function Popup({ onClose, showInfoPopup, onShow, onChangePopup }) {
    return (
        <div className={`popup ${onShow.isOpen ? "popup_opened" : ""}`}>
            <div className="popup__container">
                  <button className="popup__close-button" onClick={onClose} type="button" />
                  <h2 className="popup__title">{onShow.text}</h2>
                  {
                  onShow.link
                  &&
                  <span className="popup__link" onClick={onChangePopup}>Войти</span>
                  }
                  
              </div>
        </div>
    )
}

export default Popup;