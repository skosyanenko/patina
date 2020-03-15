import React from 'react';
import UserInfo from '../UserInfo';
import Writer from '../Writer';
import CommentBlock from 'components/CommentBlock';
import './index.sass';

const View_1 = ({review, textLength}) => {
    return (
        <>
            <div className="review-wrapper">
                <div className="review-wrapper__wrap">
                    <Writer/>
                    <div className="review-wrapper__text">
                        <h1 className="review-wrapper__text-title">{review.title}</h1>
                        <span className="review-wrapper__text-subtitle">{review.title}</span>
                    </div>
                </div>
                <div className="review-wrapper__page">
                    <div className="review-wrapper__page-triangle"/>
                    <h1 className="review-wrapper__page-title">{review.title}</h1>
                    <div className="review-wrapper__page-subtitle">
                        <span>{review.title}</span>
                    </div>
                    <div className="review-wrapper__page-text">
                        <div className="review-wrapper__user">
                            <UserInfo textLength={textLength}
                                      likes={review.likes}
                                      date={review.date}
                            />
                        </div>
                        <div className="review-wrapper__description">
                            {review.description && Object.keys(review.description).map(item => (
                                <p className={`review-wrap__${item}`} key={item}>
                                    {review.description[item]}
                                </p>
                            ))}
                        </div>
                    <span className="review-wrapper__number">1</span>
                    </div>
                </div>
            </div>
            <CommentBlock reviewId={review.id}/>
        </>
    )
};

export default View_1;
