import React from 'react';
import UserInfo from '../UserInfo';
import Writer from '../Writer';
import CommentBlock from 'components/CommentBlock';
import './index.sass';

const ViewHorizontal = ({book, title, likes, date, description, id, textLength}) => {
    return (
        <>
            <div className="review-wrapper">
                <div className="review-wrapper__wrap">
                    <Writer quote={book.quote}
                            authors={book.authors}
                            image={book.image}
                    />
                    <div className="review-wrapper__text">
                        <h1 className="review-wrapper__text-title">{book.title}</h1>
                        <span className="review-wrapper__text-subtitle">{title}</span>
                    </div>
                </div>
                <div className="review-wrapper__page">
                    <div className="review-wrapper__page-triangle"/>
                    <h1 className="review-wrapper__page-title">{book.title}</h1>
                    <div className="review-wrapper__page-subtitle">
                        <span>{title}</span>
                    </div>
                    <div className="review-wrapper__page-text">
                        <div className="review-wrapper__user">
                            <UserInfo textLength={textLength}
                                      likes={likes}
                                      date={date}
                            />
                        </div>
                        <div className="review-wrapper__description">
                            {description && description.map(item => (
                                <p className={`review-wrap__${item.type}`} key={item}>
                                    {item.data.text}
                                </p>
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
