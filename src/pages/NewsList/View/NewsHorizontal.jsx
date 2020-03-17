import React from 'react';
import {Link} from 'react-router-dom';
import Icons from 'components/Icons';
import TimeToRead from 'components/TimeToRead';
import './index.sass';

const NewsHorizontal = ({id, cover, title, description, likes, views, date, textLength}) => (
    <div className="news-horizontal">
        <div className="news-horizontal__wrapper">
            <Link to={`/news/${id}`} className="news-horizontal__link">
                <div className="news-horizontal__link-img">
                    <img src={cover} alt=""/>
                </div>
            </Link>
        <div className="news-horizontal__wrapper-nav">
            <div className="news-horizontal__wrapper-wrap">
                <Icons likes={likes} views={views} date={date}/>
                <TimeToRead textLength={textLength}/>
            </div>
            <Link to={`/news/${id}`} className="button button-white">Подробнее</Link>
        </div>
        </div>
        <div className="news-horizontal__description">
            <Link to={`/news/${id}`} className="news-horizontal__title">{title}</Link>
            <span className="news-horizontal__text"
                  dangerouslySetInnerHTML={{__html: `${description}`}}
            />
        </div>
    </div>
);

export default NewsHorizontal;
