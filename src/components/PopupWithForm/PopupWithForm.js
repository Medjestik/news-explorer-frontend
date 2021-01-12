import React from 'react';
import './PopupWithForm.css';
import '../Popup/Popup.css';

function PopupWithForm({ title, name, submitText, isOpen, onClose, onSubmit, errorForm, inputValues, linkText, onChangePopup, children }) {
    return (
        <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
            <form className="popup__container" onSubmit={onSubmit} name={name} action="#" noValidate>
                  <button className="popup__close-button" onClick={onClose} type="button" />
                  <h2 className="popup__title">{title}</h2>
                  {children}
                  <button 
                  className={`popup__submit-button ${!(inputValues && !errorForm) ? "popup__submit-button_disabled" : ""}`} 
                  type="submit">
                      {submitText}
                  </button>
                  <p className="popup__nav">или&nbsp; <span className="popup__link" onClick={onChangePopup}>{linkText}</span></p>
              </form>
        </div>
    )
}

export default PopupWithForm;