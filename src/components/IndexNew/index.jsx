import React from "react";
import "./index.sass";
import Icons from "../Icons";
import {Link} from "gatsby";

const IndexNew = () => {
  return (
      <div className="index-new">
          <div className="index-new__img">
              <img src={require('static/images/news/1.png')} alt=""/>
          </div>
          <div className="index-new__about">
              <div className="index-new__title">Книга «Ветра зимы» выйдет в 2020 году</div>
              <div className="index-new__text">
                  <p>Поклонники Вселенной Мартина остались недовольны финалом сериала «Игра Престолов», Петиция о пересъемке 8 сезона набирает обороты, но все же фанам придется дождаться выхода книг Джорджа Мартина, чтобы узнать альтернативный конец истории.</p>
                  <p>«Ветра зимы» одна их самых ожидаемых книг последних лет. Джордж Мартин все время откладывал выход книги, но на этот раз писатель обещал презентовать книгу в середине 2020 года. Именно в это время в Новой Зеландии пройдет Всемирный конвент научной фантастики.</p>
              </div>
              <div className="index-new__nav">
                  <div className="index-new__arrows">
                      <div className="index-new__arrow">
                          <img src={require('static/images/icons/arrow.svg')} alt=""/>
                      </div>
                      <div className="index-new__arrow">
                          <img src={require('static/images/icons/arrow.svg')} alt=""/>
                      </div>
                  </div>
                  <Icons like={16} views={16} clock={16}/>
                  <Link to={'/top'} className="button-black">Далее</Link>
                </div>
          </div>
          <div className="index-new__slider-numb">
              <div className="index-new__slider-prev">01</div>
              <div className="index-new__slider-pres">02</div>
              <div className="index-new__slider-next">03</div>
          </div>
      </div>
  )
};

export default IndexNew;
