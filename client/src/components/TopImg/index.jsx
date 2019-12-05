import React from 'react'
import './index.sass'

const TopImg = () => {
    return (
        <div className="topImg">
            <div className="topImg__quote-top">
                <img src="/images/icons/quote.svg" alt="" className="topImg__quote"/>
            </div>
            <div className="topImg__container">
                <div className="topImg__left-box">
                    <img src="/images/tops/bg.png" alt="" className="topImg__background"/>
                <div className="topImg__border"/>
            </div>
            <div className="topImg__citation">
                <div className="topImg__citation-box">
                    Чтение хороших книг — это разговор с самыми лучшими людьми прошедших времен, и притом такой разговор, когда они сообщают нам только лучшие свои мысли.
                        <div className="topImg__author">Декарт</div>
                        <div className="topImg__quote-top">
                            <img src="/images/icons/quote.svg" alt="" className="topImg__quote"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TopImg;
