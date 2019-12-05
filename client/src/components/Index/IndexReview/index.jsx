import React from 'react'
import './index.sass'
import {Link} from 'react-router-dom'

const IndexReview = () => {
  return (
      <div className="indexReview index-wrapper">
          <div className="indexReview__slider">
              <div className="indexReview__slider-left">
                  <img src="/images/review/1.jpg" alt=""/>
              </div>
              <div className="indexReview__slider-center">
                  <div className="indexReview__slider-img">
                      <img src="images/review/2.jpg" alt=""/>
                  </div>
                  <div className="indexReview__slider-bg">
                      <div className="indexReview__slider-title">Над пропастью во ржи</div>
                      <div className="indexReview__slider-text">
                          Роман написан от лица семнадцатилетнего Холдена Колфилда, находящегося на лечении в клинике: он рассказывает об истории, случившейся с ним прошлой зимой и предшествовавшей его болезни. События, о которых он повествует, разворачиваются в
                          предрождественские дни декабря 1949 года. Воспоминания юноши начинаются со дня его отбытия из закрытой школы Пэнси, откуда он был отчислен за неуспеваемость.
                      </div>
                      <Link to={'/review'} className="button-black">Далее</Link>
                  </div>
              </div>
              <div className="indexReview__slider-right">
                  <img src="/images/review/3.jpg" alt=""/>
              </div>
          </div>
          <div className="indexReview__numb">
              <div className="indexReview__numb-prev">01</div>
              <div className="indexReview__numb-pres">02</div>
              <div className="indexReview__numb-next">03</div>
          </div>
      </div>

  )
};

export default IndexReview;
