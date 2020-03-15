import React from 'react';
import {Link} from 'react-router-dom';
import './index.sass';

const Description = (currentBook, toggleModal) => (
    <div className="description">
        <h1 className="description__title">{currentBook.title}</h1>
        <div className="description__text"
             dangerouslySetInnerHTML={{__html: `${currentBook.fullDescription}`}}
        />
        <div className="description__buttons">
            {currentBook.readLink && <a href={currentBook.readLink} className="button button-white">Читать</a>}
            {currentBook.reviews && <Link to={currentBook.reviews} className="button button-green">Рецензии</Link>}
            {currentBook.films && <div className="button button-green"  onClick={toggleModal}>Экранизации</div>}
        </div>
    </div>
);

export default Description;
