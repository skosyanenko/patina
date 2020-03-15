import React from 'react';
import {Link} from 'react-router-dom';
import Icons from 'components/Icons';
import TimeToRead from 'components/TimeToRead';
import './index.sass';

const NewsVertical = ({news, textLength}) => (
    <div className="news-vertical">
        <Link to={`/news/${news.id}`} className="news-vertical__link">
            <div className="news-vertical__link-img">
                <img src={news.cover} alt=""/>
            </div>
        </Link>
        <div className="news-vertical__description">
            <div className="news-vertical__description-wrap">
                <Link to={`/news/${news.id}`} className="news-vertical__title">{news.title}</Link>
                <span className="news-vertical__text">{news.description}</span>
            </div>
            <div className="news-vertical__description-nav">
                <Icons likes={news.likes} views={news.views} date={news.date}/>
                <TimeToRead textLength={textLength}/>
                <Link to={`/news/${news.id}`} className="button button-white">Подробнее</Link>
            </div>
        </div>
    </div>
);

export default NewsVertical;
