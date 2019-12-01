import React from "react";
import "./index.sass";

const ReviewAuthor = () => {
  return (
      <div className="review">
          <div className="review__top">
              <div className="review__author">
                  <div className="review__name">
                      Уильям Джеральд Голдинг
                  </div>
                  <div className="review__date">1911-1993</div>
              </div>
              <div className="review__citation">
                  ‘’Разнообразный и богатый опыт начало повседневной работы по формированию позиции позволяет оценить значение направлений прогрессивного развития.’’
              </div>
          </div>
          <div className="review__end">
              <img src="/images/author/Golding.png" alt="" className="review__img"/>
              <div className="review__quote">
                  <img src="/images/icons/black-quote.svg" alt="" className="review__quote-img"/>
              </div>
              <div className="review__pink-circle"> </div>
              <div className="review__big-circle"> </div>
              <div className="review__small-circle"> </div>
              <div className="review__quote">
                  <img src="/images/icons/black-quote.svg" alt="" className="review__quote-img"/>
              </div>
          </div>
      </div>
  )
};

export default ReviewAuthor;
