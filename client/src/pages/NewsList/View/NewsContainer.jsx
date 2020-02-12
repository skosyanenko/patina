import React from 'react';
import {Link} from 'react-router-dom';
import Icons from 'components/Icons';
import './index.sass';

const NewsContainer = () => {
    return (
        <div className="news-container">
            <Link to={'/new'}>
                <div className="news-container__img">
                    <img src="/images/topImage/6.jpg" alt=""/>
                </div>
            </Link>
            <Link to={'/new'} className="news-container__title">На западном Урале проходит эко-арт фестиваль по следам Мяковского</Link>
            <span className="news-container__text">Поклонники Вселенной Мартина остались недовольны финалом сериала «Игра Престолов», Петиция о пересъемке 8 сезона набирает обороты, но все же фанам придется дождаться выхода книг Джорджа Мартина, чтобы узнать альтернативный конец истории. Поклонники Вселенной Мартина остались недовольны финалом сериала «Игра Престолов», Петиция о пересъемке 8 сезона набирает обороты, но</span>
            <div className="news-container__nav">
                <Icons like={16} views={16} clock={16}/>
                <Link to={'/new'} className="button button-white">Подробнее</Link>
            </div>
        </div>
    )
};

export default NewsContainer;
