import React from 'react';
import {Link} from 'react-router-dom';
import Icons from 'components/Icons';
import TimeToRead from 'components/TimeToRead';
import './index.sass';

const NewsBlock = ({title, description, textLength, cover, likes, views, date}) => (
    <div className="news-block">
        <Link to={'/new'}>
            <div className="news-block__img">
                <img src={cover} alt=""/>
            </div>
        </Link>
        <Link to={'/new'} className="news-block__title">{title}</Link>
        <span className="news-block__text">{description}</span>
        <div className="news-block__nav">
            <Icons likes={likes} views={views} date={date}/>
            <TimeToRead textLength={textLength}/>
            <Link to={'/new'} className="button button-white">Подробнее</Link>
        </div>
    </div>
);

export default NewsBlock;
