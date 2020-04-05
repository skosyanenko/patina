import React from 'react';
import { Link } from 'react-router-dom';
import Icons from 'components/Icons';
import TimeToRead from 'components/TimeToRead';

const NewsBlock = ({ id, cover, title, description, likes, views, date, textLength }) => (
    <div className="news-block">
        <Link to={`/news/${id}`}>
            <div className="news-block__img">
                <img src={cover} alt=""/>
            </div>
        </Link>
        <Link to={`/news/${id}`} className="news-block__title">{title}</Link>
        <span className="news-block__text"
              dangerouslySetInnerHTML={{__html: `${description}`}}
        />
        <div className="news-block__nav">
            <div className="news-block__nav-wrap">
                <Icons likes={likes} views={views} date={date}/>
                <TimeToRead textLength={textLength}/>
            </div>
            <Link to={`/news/${id}`} className="button button-white">Подробнее</Link>
        </div>
    </div>
);

export default NewsBlock;
