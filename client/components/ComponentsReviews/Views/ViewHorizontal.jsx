import React, {Fragment} from 'react';
import { formatType } from 'config/config';
import CommentBlock from 'components/CommentBlock';
import UserInfo from '../Components/UserInfo';
import Writer from '../Components/Writer';

const ViewHorizontal = ({ book, title, likes, date, description, id, textLength }) => {
    return (
        <>
            <div className="review-wrapper">
                <div className="review-wrapper__wrap">
                    <Writer quote={book && book.quote}
                            authors={book && book.authors}
                            image={book && book.authors}
                    />
                    <div className="review-wrapper__text">
                        <h1 className="review-wrapper__text-title">{book && book.title}</h1>
                        <span className="review-wrapper__text-subtitle">{title}</span>
                    </div>
                </div>
                <div className="review-wrapper__page"
                     itemType="http://schema.org/Review"
                     itemProp="review"
                     itemScope
                >
                    <div className="review-wrapper__page-triangle"/>
                    <h1 className="review-wrapper__page-title" itemProp="itemReviewed">{book.title}</h1>
                    <div className="review-wrapper__page-subtitle">
                        <span itemProp="headline name">{title}</span>
                    </div>
                    <div className="review-wrapper__page-text">
                        <div className="review-wrapper__user">
                            <UserInfo textLength={textLength}
                                      likes={likes}
                                      date={date}
                            />
                        </div>
                        <div className="review-wrapper__description" itemProp="reviewBody">
                            {description && description.map((item, key) => (
                                <Fragment key={key}>
                                    {formatType(item, key)}
                                </Fragment>
                            ))}
                        </div>
                    <span className="review-wrapper__number">1</span>
                    </div>
                </div>
            </div>
            <CommentBlock reviewId={id}/>
        </>
    )
};

export default ViewHorizontal;
