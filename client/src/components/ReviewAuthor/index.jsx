import React from 'react';
import './index.sass';

const ReviewAuthor = () => {
    return (
        <div className="review">
            <div className="review__top">
                <div className="review__top-author">
                    <div className="review__top-name">
                        Уильям Джеральд Голдинг
                    </div>
                    <div className="review__top-date">1911-1993</div>
                </div>
                <div className="review__top-citation">
                    ‘’Разнообразный и богатый опыт начало повседневной работы по формированию позиции позволяет оценить значение направлений прогрессивного развития.’’
                </div>
            </div>
            <div className="review__end">
                <img src="/images/author/Golding.png" alt="" className="review__end-img"/>
                <div className="review__end-quote">
                    <div className="review__end-quoteImg"/>
                </div>
                <div className="review__end-pinkCircle"/>
                <div className="review__end-bigCircle"/>
                <div className="review__end-smallCircle"/>
                <div className="review__end-quote">
                    <div className="review__end-quoteImg"/>
                </div>
            </div>
        </div>
    )
};

export default ReviewAuthor;
