import React from 'react';
import {Link} from 'react-router-dom';

const NewsElem = ({news}) => (
    <div className="news-elem">
        <div className="news-elem__about">
            <Link to={`/news/${news.id}`} className="news-elem__title">{news.title}</Link>
            <span className="news-elem__text">{news.description}</span>
        </div>
        <Link to={`/news/${news.id}`}>
            <div className="news-elem__img">
                <img src={news.cover} alt=""/>
            </div>
        </Link>
    </div>
);

export default NewsElem;
