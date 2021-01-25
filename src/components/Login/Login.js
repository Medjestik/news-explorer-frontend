import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js'

function Login({ isOpen, onClose, onLogin, isFormFieldsBlocked, showErrorForm, onChangePopup }) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [errorEmail, setErrorEmail] = React.useState({});
    const [errorPassword, setErrorPassword] = React.useState({});

    const errorForm = errorEmail.error || errorPassword.error;

    function handleSubmit(e) {
        e.preventDefault();
        onLogin({ email, password });
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value);
        if (e.target.checkValidity()) {
            setErrorEmail({
                errorText: '',
                error: false
            });
        }
        else {
            setErrorEmail({
                errorText: 'Неправильный формат email',
                error: true
            });
        }  
    }

    function handleChangePassword(e) {
        setPassword(e.target.value);
        if (e.target.checkValidity()) {
            setErrorPassword({
                errorText: '',
                error: false
            });
        }
        else {
            setErrorPassword({
                errorText: 'Пароль должен содержать более 6 символов',
                error: true
            });
        }  
    }

    React.useEffect(() => {
        setEmail('');
        setPassword('');
        setErrorEmail({
            errorText: '',
            error: false
        });
        setErrorPassword({
            errorText: '',
            error: false
        });
    }, [isOpen]);

    return (
        <PopupWithForm
            title="Вход"
            name="login"
            submitText="Войти"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            errorForm={errorForm}
            inputValues={email && password}
            linkText="Зарегистрироваться"
            onChangePopup={onChangePopup}
        >
        <label className="popup__field">
            <span className="popup__input-caption">Email</span>
            <input 
            className="popup__input"
            type="email" 
            id="loginEmail"
            value={email}
            onChange={handleChangeEmail}
            name="loginEmail" 
            placeholder="Введите почту" 
            minLength="2"
            required
            disabled={isFormFieldsBlocked}
            />
            <span className={`popup__input-error ${errorEmail.error ? "popup__input-error_active" : ""}`}>
                {errorEmail.errorText}
            </span>
        </label>
        <label className="popup__field">
            <span className="popup__input-caption">Пароль</span>
            <input 
            className="popup__input"
            type="password"
            id="loginPass"
            value={password}
            onChange={handleChangePassword}
            name="loginPass" 
            placeholder="Введите пароль"
            minLength="6"
            required
            disabled={isFormFieldsBlocked}
            />
            <span className={`popup__input-error ${errorPassword.error ? "popup__input-error_active" : ""}`}>
                {errorPassword.errorText}
            </span>
        </label>
        <span className={`popup__form-error ${showErrorForm.isShow ? "popup__form-error_active" : ""}`}>{showErrorForm.errText}</span>
        </PopupWithForm>
    )
}

export default Login;