import React from 'react';
import {Link} from 'react-router-dom';
import './index.sass';

const NewsLink = () => {
    return (
        <div className="news-link">
            <Link to={'/new'} className="news-link__title">Книга «Ветра зимы» выйдет в 2020 году</Link>
            <Link to={'/new'} className="button button-white">Подробнее</Link>
        </div>
    )

};

export default NewsLink;
