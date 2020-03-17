import React from 'react';
import {Link} from 'react-router-dom';

const NewsLink = ({id, title}) => (
    <div className="news-link">
        <Link to={`/news/${id}`} className="news-link__title">{title}</Link>
        <Link to={`/news/${id}`} className="button button-white">Подробнее</Link>
    </div>
);

export default NewsLink;
