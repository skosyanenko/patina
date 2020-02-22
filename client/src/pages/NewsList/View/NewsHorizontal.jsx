import React from 'react';
import {Link} from 'react-router-dom';
import Icons from 'components/Icons';
import TimeToRead from 'components/TimeToRead';
import './index.sass';

const NewsHorizontal = ({title, description, textLength, cover, likes, views, date}) => (
    <div className="news-horizontal">
        <div className="news-horizontal__wrapper">
            <Link to={'/new'} className="news-horizontal__link">
            <div className="news-horizontal__link-img">
                <img src={cover} alt=""/>
            </div>
        </Link>
        <div className="news-horizontal__wrapper-nav">
            <Icons likes={likes} views={views} date={date}/>
            <TimeToRead textLength={textLength}/>
            <Link to={'/new'} className="button button-white">Подробнее</Link>
        </div>
        </div>
        <div className="news-horizontal__description">
            <Link to={'/new'} className="news-horizontal__title">{title}</Link>
            <span className="news-horizontal__text">{description}</span>
        </div>
    </div>
);

export default NewsHorizontal;
