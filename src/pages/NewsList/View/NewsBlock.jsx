import React from 'react';
import {Link} from 'react-router-dom';
import Icons from 'components/Icons';
import TimeToRead from 'components/TimeToRead';
import './index.sass';

const NewsBlock = ({news, textLength}) => (
    <div className="news-block">
        <Link to={`/news/${news.id}`}>
            <div className="news-block__img">
                <img src={news.cover} alt=""/>
            </div>
        </Link>
        <Link to={`/news/${news.id}`} className="news-block__title">{news.title}</Link>
        <span className="news-block__text">{news.description}</span>
        <div className="news-block__nav">
            <Icons likes={news.likes} views={news.views} date={news.date}/>
            <TimeToRead textLength={textLength}/>
            <Link to={`/news/${news.id}`} className="button button-white">Подробнее</Link>
        </div>
    </div>
);

export default NewsBlock;
