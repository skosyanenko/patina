import React from 'react';
import {Link} from 'react-router-dom';
import Socials from '../SocialsGroup';
import Rating from '../Rating';
import PropTypes from 'prop-types';
import './index.sass';
import data from 'startData/booksTest';

const BookInform = ({bookId}) => {
    const currentBook = data.books.find(book => book.id === bookId);

    return (
        <div className="book-inform">
            <div className="tags">
                <div className="indexBook__about-tags">
                {currentBook && currentBook.tags.map((tag, key) => (
                    <Link to={'/'} className="tags__elem" key={key}>{tag}</Link>
                ))}
                </div>
            </div>
            <div className="book-inform__container">
                <Rating/>
                <Socials/>
                <div className="button-write-review">
                    <div className="button-write-review__img">
                        <svg viewBox="0 0 512 512.00004">
                            <use href="/images/icons/pencil.svg#pencil"/>
                        </svg>
                    </div>
                    <Link to={'/form-review'} className="button-write-review__text">
                        Написать рецензию
                    </Link>
                </div>
            </div>
          </div>
    );
};

BookInform.propTypes = {
    bookId: PropTypes.string.isRequired
};

export default BookInform;
