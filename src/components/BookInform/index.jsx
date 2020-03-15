import React from 'react';
import {Link} from 'react-router-dom';
import Typed from 'react-typed';
import Socials from '../SocialsGroup';
import Rating from '../Rating';
import './index.sass';
import data from 'startData/booksTest';

const BookInform = ({bookId, categories}) => {
    const currentBook = data.books.find(book => book.id === bookId);

    return (
        <div className="book-inform">
            <div className="tags">
                <div className="indexBook__about-tags">
                {categories && categories.map((category, key) => (
                    <Link to={'/'} className="tags__elem" key={key}>{category}</Link>
                ))}
                </div>
            </div>
            <div className="book-inform__container">
                <Rating/>
                <Socials/>
                <div className="button-write-review">
                    <div className="button-write-review__img">
                        <svg>
                            <use href="/images/icons/sprite.svg#pencil"/>
                        </svg>
                    </div>
                    <Typed className="button-write-review__animate"
                           strings = {[". . ."]}
                           typeSpeed = {100}
                           backSpeed = {0}
                           startDelay = {300}
                           showCursor = {false}
                           backDelay = {1}
                           loop = {true}
                    />
                    <Link to={'/form/review'} className="button-write-review__text">
                        Написать рецензию
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookInform;
