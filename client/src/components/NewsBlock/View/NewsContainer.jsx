import React from 'react';
import {Link} from 'react-router-dom';
import './index.sass';
import Icons from '../../Icons';

const NewsContainer = () => {
    return (
        <div className="newsContainer">
            <Link to={'/new'}>
                <div className="newsContainer__img">
                    <img src="/images/topImage/6.jpg" alt=""/>
                </div>
            </Link>
            <Link to={'/new'} className="newsContainer__title">На западном Урале проходит эко-арт фестиваль по следам Мяковского</Link>
            <div className="newsContainer__text">Поклонники Вселенной Мартина остались недовольны финалом сериала «Игра Престолов», Петиция о пересъемке 8 сезона набирает обороты, но все же фанам придется дождаться выхода книг Джорджа Мартина, чтобы узнать альтернативный конец истории. Поклонники Вселенной Мартина остались недовольны финалом сериала «Игра Престолов», Петиция о пересъемке 8 сезона набирает обороты, но</div>
            <div className="newsContainer__nav">
                <Icons like={16} views={16} clock={16}/>
                <Link to={'/new'} className="button buttonWhite">Подробнее</Link>
            </div>
        </div>
    )
};

NewsContainer.propTypes = {};

export default NewsContainer;
