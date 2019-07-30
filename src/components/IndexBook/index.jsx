import React from "react";
import "./index.sass";
import {Link} from "gatsby";
import Rating from "../Rating";

const IndexBook = () => {
  return (
      <div className="index-book">
          <div className="index-book__about">
              <div className="index-book__about-title">
                  <div className="index-book__about-numb">02</div>
                  <div className="index-book__about-name">Над пропастью во ржи</div>
              </div>
              <div className="index-book__about-tags">
                  <Link to={'/top'} className="tag-white">Роман</Link>
                  <Link to={'/top'} className="tag-white">Взросление</Link>
                  <Link to={'/top'} className="tag-white">Классика</Link>
              </div>
              <div className="index-book__about-rating">
                  <Rating/>
                  <Link to={'/top'} className="button-black">Далее</Link>
              </div>
              <div className="index-book__about-text">
                  Роман написан от лица семнадцатилетнего Холдена Колфилда, находящегося на лечении в клинике: он рассказывает об истории, случившейся с ним прошлой зимой и предшествовавшей его болезни. События, о которых он повествует, разворачиваются в
                  предрождественские дни декабря 1949 года. Воспоминания юноши начинаются со дня его отбытия из закрытой школы Пэнси, откуда он был отчислен за неуспеваемость.
              </div>
          </div>
          <div className="index-book__slider">
              <div
                  // style={{background: `url(${require('static/images/icons/arrow.svg')}) no-repeat`
                      className="index-book__slider-arrow">
                  <img src={require('static/images/icons/arrow.svg')} alt=""/>
              </div>
              <div className="index-book__slider-img">
                  <img src={require('static/images/books/index/1.jpg')} alt=""/>
              </div>
              <div className="index-book__slider-arrow">
                  <img src={require('static/images/icons/arrow.svg')} alt=""/>
              </div>
              <div className="index-book__slider-numb">
                  <div className="index-book__slider-prev">01</div>
                  <div className="index-book__slider-pres">02</div>
                  <div className="index-book__slider-next">03</div>
              </div>
          </div>
      </div>
  )
};

export default IndexBook;
