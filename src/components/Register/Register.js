import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js'

function Register({ isOpen, onClose, onSubmit, onChangePopup }) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');
    const [errorEmail, setErrorEmail] = React.useState({});
    const [errorPassword, setErrorPassword] = React.useState({});
    const [errorName, setErrorName] = React.useState({});

    const errorForm = errorEmail.error || errorPassword.error || errorName.error;

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit();
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

    function handleChangeName(e) {
        setName(e.target.value);
        if (e.target.checkValidity()) {
            setErrorName({
                errorText: '',
                error: false
            });
        }
        else {
            setErrorName({
                errorText: e.target.validationMessage,
                error: true
            });
        }  
    }

    React.useEffect(() => {
        setEmail('');
        setPassword('');
        setName('');
        setErrorEmail({
            errorText: '',
            error: false
        });
        setErrorPassword({
            errorText: '',
            error: false
        });
        setErrorName({
            errorText: '',
            error: false
        });
    }, [isOpen]);

    return (
        <PopupWithForm
            title="Регистрация"
            name="registration"
            submitText="Зарегистрироваться"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            errorForm={errorForm}
            inputValues={email && password && name}
            linkText="Войти"
            onChangePopup={onChangePopup}
        >
        <label className="popup__field">
            <span className="popup__input-caption">Email</span>
            <input 
            className="popup__input"
            type="email" 
            id="regEmail"
            value={email}
            onChange={handleChangeEmail}
            name="regEmail" 
            placeholder="Введите почту" 
            minLength="2"
            required
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
            id="regPass"
            value={password}
            onChange={handleChangePassword}
            name="regPass"
            placeholder="Введите пароль"
            minLength="6"
            required
            />
            <span className={`popup__input-error ${errorPassword.error ? "popup__input-error_active" : ""}`}>
                {errorPassword.errorText}
            </span>
        </label>
        <label className="popup__field">
            <span className="popup__input-caption">Имя</span>
            <input
            className="popup__input"
            type="text"
            id="regName"
            value={name}
            onChange={handleChangeName}
            name="regName"
            placeholder="Введите своё имя"
            minLength="2"
            maxLength="30"
            required
            pattern="[A-Za-zА-Яа-яЁё -]{1,}"
            />
            <span className={`popup__input-error ${errorName.error ? "popup__input-error_active" : ""}`}>
                {errorName.errorText}
            </span>
        </label>
        <span className="popup__form-error">Такой пользователь уже есть</span>
        </PopupWithForm>
    )
}

export default Register;