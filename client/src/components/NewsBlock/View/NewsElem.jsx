import React from 'react';
import {Link} from 'react-router-dom';
import './index.sass';

const NewsElem = () => {
    return (
        <div className="newsElem">
            <div className="newsElem__about">
                <Link to={'/new'} className="newsElem__title">Книга «Ветра зимы» выйдет в 2020 году</Link>
                <div className="newsElem__text">Поклонники Вселенной Мартина остались недовольны финалом сериала «Игра Престолов», Петиция о пересъемке 8 сезона набирает обороты, но все же фанам придется дождаться выхода книг Джорджа Мартина, чтобы узнать альтернативный конец истории. </div>
            </div>
            <Link to={'/new'}>
                <div className="newsElem__img">
                    <img src="/images/topImage/6.jpg" alt=""/>
                </div>
            </Link>
        </div>
    )

};

NewsElem.propTypes = {};

export default NewsElem;
