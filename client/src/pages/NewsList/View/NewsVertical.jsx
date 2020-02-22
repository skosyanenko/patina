import React from 'react';
import {Link} from 'react-router-dom';
import Icons from 'components/Icons';
import TimeToRead from 'components/TimeToRead';
import './index.sass';

const NewsVertical = ({title, description, textLength, cover, likes, views, date}) => (
    <div className="news-vertical">
        <Link to={'/new'} className="news-vertical__link">
            <div className="news-vertical__link-img">
                <img src={cover} alt=""/>
            </div>
        </Link>
        <div className="news-vertical__description">
            <div className="news-vertical__description-wrap">
                <Link to={'/new'} className="news-vertical__title">{title}</Link>
                <span className="news-vertical__text">{description}</span>
            </div>
            <div className="news-vertical__description-nav">
                <Icons likes={likes} views={views} date={date}/>
                <TimeToRead textLength={textLength}/>
                <Link to={'/new'} className="button button-white">Подробнее</Link>
            </div>
        </div>
    </div>
);

export default NewsVertical;
