import React from "react";
import "./index.sass";
import {Link} from "gatsby";

const IndexReview = () => {
  return (
      <div className="index-review index-wrapper">
          <div className="index-review__slider">
              <div className="index-review__slider-left">
                  <img src={require('static/images/review/1.jpg')} alt=""/>
              </div>
              <div className="index-review__slider-center">
                  <div className="index-review__slider-img">
                      <img src={require('static/images/review/2.jpg')} alt=""/>
                  </div>
                  <div className="index-review__slider-bg">
                      <div className="index-review__slider-title">Над пропастью во ржи</div>
                      <div className="index-review__slider-text">
                          Роман написан от лица семнадцатилетнего Холдена Колфилда, находящегося на лечении в клинике: он рассказывает об истории, случившейся с ним прошлой зимой и предшествовавшей его болезни. События, о которых он повествует, разворачиваются в
                          предрождественские дни декабря 1949 года. Воспоминания юноши начинаются со дня его отбытия из закрытой школы Пэнси, откуда он был отчислен за неуспеваемость.
                      </div>
                      <Link to={'/review'} className="button-black">Далее</Link>
                  </div>
              </div>
              <div className="index-review__slider-right">
                  <img src={require('static/images/review/3.jpg')} alt=""/>
              </div>
          </div>
          <div className="index-review__numb">
              <div className="index-review__numb-prev">01</div>
              <div className="index-review__numb-pres">02</div>
              <div className="index-review__numb-next">03</div>
          </div>
      </div>

  )
};

export default IndexReview;
