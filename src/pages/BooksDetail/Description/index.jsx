import React from 'react';
import {Link} from 'react-router-dom';
import './index.sass';

const Description = ({title, fullDescription, readLink, reviews, films, toggleModal}) => (
    <div className="description">
        <h1 className="description__title">{title}</h1>
        <div className="description__text"
             dangerouslySetInnerHTML={{__html: `${fullDescription}`}}
        />
        <div className="description__buttons">
            {readLink && <a href={readLink} className="button button-white">Читать</a>}
            {reviews && <Link to={reviews} className="button button-green">Рецензии</Link>}
            {films && <div className="button button-green" onClick={toggleModal}>Экранизации</div>}
        </div>
    </div>
);

export default Description;
