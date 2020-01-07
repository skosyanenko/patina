import React from 'react';
import './index.sass';
import Socials from '../Socials';
import Rating from '../Rating';
import {Link} from 'react-router-dom';
import data from 'startData/booksTest';

const BookInform = () => {
    return (
        <div className="bookInform">
            {data && data.books.map((item, key) => (
                <div className="tags" key={key}>
                    <div className="indexBook__about-tags">
                        {item && item.tags.map((tag, key) => (
                            <Link to={'/'} className="tags__elem" key={key}>{tag}</Link>
                        ))}
                    </div>
                </div>
            ))}

            <div className="bookInform__container">
                <Rating/>
                <Socials/>
                <div className="buttonWriteReview">
                    <div className="buttonWriteReview__img">
                        <svg viewBox="0 0 512 512.00004">
                            <use href="/images/icons/pencil.svg#pencil"/>
                        </svg>
                    </div>
                    <div className="buttonWriteReview__text">Написать рецензию</div>
                </div>
            </div>
        </div>
    )
};

export default BookInform;
