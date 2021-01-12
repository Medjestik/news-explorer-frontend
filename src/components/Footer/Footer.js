import React from 'react';
import './Footer.css';
import github from '../../images/github-icon.png';
import vkontakte from '../../images/vk-icon.png';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__copy">&copy; 2020 Supersite, Powered&nbsp;by&nbsp;News&nbsp;API</p>
            <ul className="footer__nav">
                <li className="footer__nav-item"><a className="footer__nav-link" href="/">Главная</a></li>
                <li className="footer__nav-item"><a className="footer__nav-link" href="https://praktikum.yandex.ru" target="_blank" rel="noreferrer">Яндекс.Практикум</a></li>
            </ul>
            <ul className="footer__social">
                <li className="footer__social-item"><a className="footer__social-link" href="https://github.com/Medjestik/news-explorer-frontend" target="_blank" rel="noreferrer"><img className="footer__social-img" src={github} alt="Иконка github" /></a></li>
                <li className="footer__social-item"><a className="footer__social-link" href="https://vk.com/yandex.praktikum" target="_blank" rel="noreferrer"><img className="footer__social-img" src={vkontakte} alt="Иконка VK" /></a></li>
            </ul>
        </footer>
    )
}

export default Footer;