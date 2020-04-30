import React from 'react';
import Link from 'next/link';
import Typed from 'react-typed';
import Socials from 'components/SocialsGroup';
import Rating from 'components/Rating';
import Router from "next/router";

const BookInform = ({ categories, ratingCount, ratingTotal }) => (
    <div className="book-inform">
        <div className="tags">
            { categories && categories.map((category, key) => (
                <div
                    className="tags__elem"
                    itemProp="genre"
                    key={key}
                    onClick={() => Router.push({
                        pathname: '/search',
                        query: { category: category.id }
                })}>
                    {category.title}
                </div>
            ))}
        </div>
        <div className="book-inform__container">
            <Rating ratingCount={ratingCount}
                ratingTotal={ratingTotal}
            />
            <Socials/>
            <div className="button-write-review">
                <div className="button-write-review__img"/>
                <Typed className="button-write-review__animate"
                    strings={['. . .']}
                    typeSpeed={100}
                    backSpeed={0}
                    startDelay={300}
                    showCursor={false}
                    backDelay={1}
                    loop={true}
                />
                <Link href={'/add_review'}>
                    <a className="button-write-review__text">Написать рецензию</a>
                </Link>
            </div>
        </div>
    </div>
);

export default BookInform;
