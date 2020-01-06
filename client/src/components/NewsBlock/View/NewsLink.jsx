import React from 'react';
import {Link} from 'react-router-dom';
import './index.sass';

const NewsLink = () => {
    return (
        <div className="newsLink">
            <Link to={'/new'} className="newsLink__title">Книга «Ветра зимы» выйдет в 2020 году</Link>
            <Link to={'/new'} className="button buttonWhite">Подробнее</Link>
        </div>
    )

};

NewsLink.propTypes = {};

export default NewsLink;
