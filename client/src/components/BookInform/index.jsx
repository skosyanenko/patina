import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Typed from 'react-typed';
import Socials from 'components/SocialsGroup';
import Rating from 'components/Rating';
import Auth from 'services/Authorization';

const BookInform = ({ type, idElem, categories, ratingCount, ratingTotal, toggleModal }) => {
    const initialState = {
        isEntered: false
    };

    useEffect(() => {
        if ( Auth.token && Auth.token.length > 0) {
            setState({
                isEntered: true
            })
        } else {
            setState({
                isEntered: false
            })
        }
    }, [Auth]);

    const [state, setState] = useState(initialState);
    const { isEntered } = state;

    return (
        <div className="book-inform">
            <div className="tags">
                {categories && categories.map((category, key) => (
                    <Link
                        key={key}
                        as={`/search?filter=category&title=${category.title}`}
                        href={`/search?filter=category&title=${category.title}`}
                    >
                        <a
                            className="tags__elem"
                            itemProp="genre"
                            key={key}
                        >
                            {category.title}
                        </a>
                    </Link>
                ))}
            </div>
            <div className="book-inform__container">
                <Rating ratingCount={ratingCount}
                        ratingTotal={ratingTotal}
                        toggleModal={toggleModal}
                />
                <Socials
                    idElem={idElem}
                    type={type}
                    toggleModal={toggleModal}
                />
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
                    {isEntered
                        ?
                        <Link href={'/add_review'}>
                            <a className="button-write-review__text">Написать рецензию</a>
                        </Link>
                        :
                        <div className="button-write-review__text" onClick={toggleModal}>
                            Написать рецензию
                        </div>
                    }
                </div>
            </div>
        </div>
    )
};

export default BookInform;
