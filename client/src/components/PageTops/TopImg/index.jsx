import React, {Component} from 'react';
import Typed from 'react-typed';
import './index.sass';

class TopImg extends Component {
    render() {
        return (
            <div className="topImg">
                <div className="topImg__quote-top">
                    <div className="topImg__quote"/>
                </div>
                <div className="topImg__container">
                    <div className="topImg__left-box">
                        <img src="/images/tops/bg.png" alt="" className="topImg__background"/>
                    <div className="topImg__border"/>
                    </div>
                    <div className="topImg__citation">
                        <div className="topImg__citation-box">
                            <Typed className="wrapperQuote__container-text"
                                   strings = {["Чтение хороших книг — это разговор с самыми лучшими людьми прошедших времен, и притом такой разговор, когда они сообщают нам только лучшие свои мысли."]}
                                   typeSpeed = {50}
                                   backSpeed = {20}
                                   startDelay = {1500}
                                   showCursor = {false}
                                   backDelay = {3000}
                                   loop = {true}
                            />
                            <div className="topImg__author">Декарт</div>
                            <div className="topImg__quote-top">
                                <div className="topImg__quote"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

TopImg.propTypes = {};

export default TopImg;
