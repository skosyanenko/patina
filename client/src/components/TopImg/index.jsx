import React from "react";
import "./index.sass";

const TopImg = () => {
  return (
      <div className="top-img">
          <div className="top-img__quote-top">
              <img src="/images/icons/quote.svg" alt="" className="top-img__quote"/>
          </div>
          <div className="top-img__container">
              <div className="top-img__left-box">
                  <img src="static/images/tops/bg.png" alt="" className="top-img__background"/>
                  <div className="top-img__border"/>
              </div>
              <div className="top-img__citation-box">
                  <div className="top-img__citation">
                      Чтение хороших книг — это разговор с самыми лучшими людьми прошедших времен, и притом такой разговор, когда они сообщают нам только лучшие свои мысли.
                      <div className="top-img__author">Декарт</div>
                      <div className="top-img__quote-top">
                          <img src="static/images/icons/quote.svg" alt="" className="top-img__quote"/>
                      </div>
                  </div>
              </div>
          </div>

      </div>
  )
};

export default TopImg;
