import React, {Component} from 'react';
import Typed from 'react-typed';
import './index.sass';

class ReviewAuthor extends Component {

    render() {
        return (
            <div className="review">
                <div className="review__top">
                    <div className="review__top-author">
                        <div className="review__top-name">
                            Уильям Джеральд Голдинг
                        </div>
                        <div className="review__top-date">1911-1993</div>
                    </div>
                    <Typed className="review__top-citation"
                           strings = {["Разнообразный и богатый опыт начало повседневной работы по формированию позиции позволяет оценить значение направлений прогрессивного развития."]}
                           typeSpeed = {50}
                           backSpeed = {20}
                           startDelay = {1500}
                           showCursor = {false}
                           backDelay = {3000}
                           loop = {true}
                    />
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
        );
    }
}

ReviewAuthor.propTypes = {};

export default ReviewAuthor;
