import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Typed from 'react-typed';
import Socials from 'components/SocialsGroup';
import MyRating from 'components/MyRating';
import Auth from 'services/Authorization';

const BookInform = ({ idContent, titleContent, description, image, bookmarked, weight, categories, votes, toggleModal }) => {
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
                <MyRating
                    votes={votes}
                    bookId={idContent}
                    toggleModal={toggleModal}
                />
                <Socials
                    idContent={idContent}
                    titleContent={titleContent}
                    description={description}
                    bookmarked={bookmarked}
                    image={image}
                    weight={weight}
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
