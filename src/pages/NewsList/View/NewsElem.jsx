import React from 'react';
import {Link} from 'react-router-dom';

const NewsElem = ({id, cover, title, description}) => (
    <div className="news-elem">
        <div className="news-elem__about">
            <Link to={`/news/${id}`} className="news-elem__title">{title}</Link>
            <span className="news-elem__text"
                  dangerouslySetInnerHTML={{__html: `${description}`}}
            />
        </div>
        <Link to={`/news/${id}`}>
            <div className="news-elem__img">
                <img src={cover} alt=""/>
            </div>
        </Link>
    </div>
);

export default NewsElem;
