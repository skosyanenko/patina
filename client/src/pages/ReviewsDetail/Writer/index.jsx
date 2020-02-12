import React, {Component} from 'react';
import Typed from 'react-typed';
import './index.sass';

class Writer extends Component {

    render() {
        return (
            <div className="writer">
                <div className="writer__wrapper">
                    <div className="writer__wrapper-author">
                        <h3 className="writer__wrapper-name">
                            Уильям Джеральд Голдинг
                        </h3>
                        <span className="writer__wrapper-date">1911-1993</span>
                    </div>
                    <Typed className="writer__wrapper-citation"
                           strings = {["Разнообразный и богатый опыт начало повседневной работы по формированию позиции позволяет оценить значение направлений прогрессивного развития."]}
                           typeSpeed = {50}
                           backSpeed = {20}
                           startDelay = {1500}
                           showCursor = {false}
                           backDelay = {3000}
                           loop = {true}
                    />
                </div>
                <div className="writer__picture">
                    <img src="/images/author/Golding.png" alt="" className="writer__picture-img"/>
                    <div className="writer__picture-quote">
                        <div className="writer__picture-quoteImg"/>
                    </div>
                    <div className="writer__picture-pinkCircle"/>
                    <div className="writer__picture-bigCircle"/>
                    <div className="writer__picture-smallCircle"/>
                    <div className="writer__picture-quote">
                        <div className="writer__picture-quoteImg"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Writer;
