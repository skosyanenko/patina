import React from 'react';
import {Link} from 'react-router-dom';

const NewsLink = ({title}) => (

    <div className="news-link">
        <Link to={'/new'} className="news-link__title">{title}</Link>
        <Link to={'/new'} className="button button-white">Подробнее</Link>
    </div>
);

export default NewsLink;
