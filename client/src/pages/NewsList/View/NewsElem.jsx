import React from 'react';
import {Link} from 'react-router-dom';
import './index.sass';

const NewsElem = () => {
    return (
        <div className="news-elem">
            <div className="news-elem__about">
                <Link to={'/new'} className="news-elem__title">Книга «Ветра зимы» выйдет в 2020 году</Link>
                <span className="news-elem__text">Поклонники Вселенной Мартина остались недовольны финалом сериала «Игра Престолов», Петиция о пересъемке 8 сезона набирает обороты, но все же фанам придется дождаться выхода книг Джорджа Мартина, чтобы узнать альтернативный конец истории. </span>
            </div>
            <Link to={'/new'}>
                <div className="news-elem__img">
                    <img src="/images/topImage/6.jpg" alt=""/>
                </div>
            </Link>
        </div>
    )

};

export default NewsElem;
