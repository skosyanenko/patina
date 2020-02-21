import React from 'react';
import {Link} from 'react-router-dom';

const NewsElem = ({title, description, cover}) => (

    <div className="news-elem">
        <div className="news-elem__about">
            <Link to={'/new'} className="news-elem__title">{title}</Link>
            <span className="news-elem__text">{description}</span>
        </div>
        <Link to={'/new'}>
            <div className="news-elem__img">
                <img src={cover} alt=""/>
            </div>
        </Link>
    </div>
);

export default NewsElem;
