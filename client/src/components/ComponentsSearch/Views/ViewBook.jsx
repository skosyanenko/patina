import React from 'react';
import Link from 'next/link';
import { returnAuthor } from 'config/config';
import Rating from 'components/MyRating';

const ViewBook = ({ item, toggleModal }) => (
    <div className="results"
        itemType="https://schema.org/Book"
        itemProp="book"
        itemScope
    >
        <Link href={'/books/[id]'} as={`/books/${item.id}`}>
            <a className="results__img">
                {item.coverImage && <img src={`${process.env.API_URL}${item.coverImage.url}`} alt="" itemProp="image"/>}
            </a>
        </Link>
        <div className="results__wrapper">
            <Link href={'/books/[id]'} as={`/books/${item.id}`}>
                <a className="results__wrapper-title" itemProp="name">
                    {item.title}
                </a>
            </Link>
            <h3 className="results__wrapper-author" itemProp="author">{returnAuthor(item.authors)}</h3>
            <Rating
                ratingTotal={item.ratingTotal}
                toggleModal={toggleModal}
            />
            <span className="results__wrapper-weight" itemProp="numberOfPages">
                {item.weight} стр.
            </span>
        </div>
    </div>
);

export default ViewBook;
