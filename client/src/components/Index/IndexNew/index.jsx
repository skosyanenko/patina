import React from 'react'
import './index.sass'
import Icons from '../../Icons'
import {Link} from 'react-router-dom'

const IndexNew = () => {
  return (
      <div className="indexNew index-wrapper">
          <div className="indexNew__img">
              <img src="/images/news/1.png" alt=""/>
          </div>
          <div className="indexNew__about">
              <div className="indexNew__title">Книга «Ветра зимы» выйдет в 2020 году</div>
              <div className="indexNew__text">
                  <p>Поклонники Вселенной Мартина остались недовольны финалом сериала «Игра Престолов», Петиция о пересъемке 8 сезона набирает обороты, но все же фанам придется дождаться выхода книг Джорджа Мартина, чтобы узнать альтернативный конец истории.</p>
                  <p>«Ветра зимы» одна их самых ожидаемых книг последних лет. Джордж Мартин все время откладывал выход книги, но на этот раз писатель обещал презентовать книгу в середине 2020 года. Именно в это время в Новой Зеландии пройдет Всемирный конвент научной фантастики.</p>
              </div>
              <div className="indexNew__nav">
                  <div className="indexNew__arrows">
                      <div className="indexNew__arrow">
                          <img src="/images/icons/arrow.svg" alt=""/>
                      </div>
                      <div className="indexNew__arrow">
                          <img src="/images/icons/arrow.svg" alt=""/>
                      </div>
                  </div>
                  <Icons like={16} views={16} clock={16}/>
                  <Link to={'/top'} className="button-black">Далее</Link>
                </div>
          </div>
          <div className="indexNew__slider-numb">
              <div className="indexNew__slider-prev">01</div>
              <div className="indexNew__slider-pres">02</div>
              <div className="indexNew__slider-next">03</div>
          </div>
      </div>
  )
};

export default IndexNew;
