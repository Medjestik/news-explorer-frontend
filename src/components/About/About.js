import React from 'react';
import './About.css';
import author from '../../images/main-author.jpg';

function About() {
    return (
        <section className="container about__container">
            <img src={author} className="about__author-img" alt="Изображение автора" />
            <div className="about__author-description">
                <h3 className="about__author-title">Об авторе</h3>
                <p className="about__author-text">Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, чем вы занимаетесь, какими технологиями разработки владеете.</p>
                <p className="about__author-text">Также можно рассказать о процессе обучения в Практикуме, чему вы тут научились, и чем можете помочь потенциальным заказчикам.</p>
            </div>
        </section>
    )
}

export default About;