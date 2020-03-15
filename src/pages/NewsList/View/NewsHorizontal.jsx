import React from 'react';
import {Link} from 'react-router-dom';
import Icons from 'components/Icons';
import TimeToRead from 'components/TimeToRead';
import './index.sass';

const NewsHorizontal = ({news, textLength}) => (
    <div className="news-horizontal">
        <div className="news-horizontal__wrapper">
            <Link to={`/news/${news.id}`} className="news-horizontal__link">
                <div className="news-horizontal__link-img">
                    <img src={news.cover} alt=""/>
                </div>
            </Link>
        <div className="news-horizontal__wrapper-nav">
            <Icons likes={news.likes} views={news.views} date={news.date}/>
            <TimeToRead textLength={textLength}/>
            <Link to={`/news/${news.id}`} className="button button-white">Подробнее</Link>
        </div>
        </div>
        <div className="news-horizontal__description">
            <Link to={`/news/${news.id}`} className="news-horizontal__title">{news.title}</Link>
            <span className="news-horizontal__text">{news.description}</span>
        </div>
    </div>
);

export default NewsHorizontal;
