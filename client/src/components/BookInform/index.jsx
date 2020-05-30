import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Typed from 'react-typed';
import Socials from 'components/SocialsGroup';
import MyRating from 'components/MyRating';
import Auth from 'services/Authorization';
import axios from 'axios';

const { API_URL } = process.env;

const BookInform = ({ idContent, titleContent, description, image, weight, categories, toggleModal }) => {
    const initialState = {
        bookmarked: [],
        votes: []
    };

    const [state, setState] = useState(initialState);

    const [isEntered, setIsEntered] = useState(false);

    const { bookmarked, votes } = state;

    useEffect(() => {
        getDynamicContent();
    }, [idContent]);

    useEffect(() => {
        if ( Auth.token && Auth.token.length > 0) {
            setIsEntered(true)
        } else {
            setIsEntered(false)
        }
    }, [Auth]);

    const getDynamicContent = () => {
        axios.get(`${API_URL}/books/${idContent}`)
            .then(res => {
                if (res.status === 200 ) {
                    setState({
                        bookmarked: res.data.bookmarked,
                        votes: res.data.votes
                    })
                }
            })
    };

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
                    bookId={idContent}
                    titleContent={titleContent}
                    description={description}
                    image={image}
                    weight={weight}
                    toggleModal={toggleModal}
                    isBookmarks={true}
                    bookmarked={bookmarked}
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
                        <div className="button-write-review__text" onClick={() => toggleModal(true)}>
                            Написать рецензию
                        </div>
                    }
                </div>
            </div>
        </div>
    )
};

export default BookInform;
