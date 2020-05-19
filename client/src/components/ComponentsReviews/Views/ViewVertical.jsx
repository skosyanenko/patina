import React from 'react';
import ReactMarkdown from 'react-markdown';
import { counterLetters, returnDatePublish } from 'config/config';
import UserInfo from '../Components/UserInfo';
import Writer from '../Components/Writer';

const ViewVertical = ({ user, book, title, description, likes, created_at, id, authors, toggleModal }) => {
    return (
        <>
            <div className="container-review"
                 itemType="http://schema.org/Review"
                 itemProp="review"
                 itemScope
            >
                <Writer quote={book && book.quote}
                        authors={authors}
                        image={authors}
                />
                <div className="container-review__text">
                    <h1 className="container-review__text-title" itemProp="itemReviewed">
                        {book && book.title}
                    </h1>
                    <span className="container-review__text-subtitle" itemProp="headline name">
                        {title}
                    </span>
                </div>
            </div>

            <div className="review-wrap" itemProp="reviewBody">
                <ReactMarkdown children={description}/>
            </div>
            {description &&
                <UserInfo
                    user={user}
                    likes={likes}
                    idContent={id}
                    typeContent={'reviews'}
                    date={returnDatePublish(created_at)}
                    textLength={counterLetters(description)}
                    toggleModal={toggleModal}
                />
            }
        </>
    )
};

export default ViewVertical;