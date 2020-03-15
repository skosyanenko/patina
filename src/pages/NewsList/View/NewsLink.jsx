import React from 'react';
import {Link} from 'react-router-dom';

const NewsLink = ({news}) => (
    <div className="news-link">
        <Link to={`/news/${news.id}`} className="news-link__title">{news.title}</Link>
        <Link to={`/news/${news.id}`} className="button button-white">Подробнее</Link>
    </div>
);

export default NewsLink;
