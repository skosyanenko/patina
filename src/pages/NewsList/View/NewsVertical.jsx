import React from 'react';
import {Link} from 'react-router-dom';
import Icons from 'components/Icons';
import TimeToRead from 'components/TimeToRead';
import './index.sass';

const NewsVertical = ({id, cover, title, description, likes, views, date, textLength}) => (
    <div className="news-vertical">
        <Link to={`/news/${id}`} className="news-vertical__link">
            <div className="news-vertical__link-img">
                <img src={cover} alt=""/>
            </div>
        </Link>
        <div className="news-vertical__description">
            <div className="news-vertical__description-wrap">
                <Link to={`/news/${id}`} className="news-vertical__title">{title}</Link>
                <span className="news-vertical__text"
                      dangerouslySetInnerHTML={{__html: `${description}`}}
                />
            </div>
            <div className="news-vertical__description-nav">
                <div className="news-vertical__description-wrapper">
                    <TimeToRead textLength={textLength}/>
                    <Icons likes={likes} views={views} date={date}/>
                </div>
                <Link to={`/news/${id}`} className="button button-white">Подробнее</Link>
            </div>
        </div>
    </div>
);

export default NewsVertical;
