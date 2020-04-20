import React, { Fragment } from 'react';
import { formatType } from 'config/config';
import CommentBlock from 'components/CommentBlock';
import UserInfo from '../Components/UserInfo';
import Writer from '../Components/Writer';

const ViewVertical = ({ book, title, description, likes, date, id, textLength }) => {
    return (
        <>
            <div className="container-review"
                 itemType="http://schema.org/Review"
                 itemProp="review"
                 itemScope
            >
                <Writer quote={book && book.quote}
                        authors={book && book.authors}
                        image={book && book.authors}
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
                {description && description.map((item, key) => (
                    <Fragment key={key}>
                        {formatType(item, key)}
                    </Fragment>
                ))}
            </div>
            <UserInfo textLength={textLength}
                      likes={likes}
                      date={date}
            />
            <CommentBlock reviewId={id}/>
        </>
    )
};

export default ViewVertical;