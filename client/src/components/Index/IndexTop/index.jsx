import React from 'react'
import './index.sass'
import {Link} from 'react-router-dom'

const IndexTop = ({title, subtitle}) => {
  return (
      <div className="indexTop index-wrapper">
          <div className="indexTop__slider">
              <div className="indexTop__slider-img">
                  <img src="/images/tops/index/1.jpg" alt=""/>
              </div>
              <div className="indexTop__slider-about">
                  <Link to={'/top'} className="indexTop__slider-title">Книги, от которых трудно оторваться</Link>
                  <div className="indexTop__slider-text">Ты, ничего не подозревая, за завтраком неспешно открываешь первую страницу, скользишь взглядом по буквам все дальше, дальше… и приходишь в себя только когда у тебя окончательно затекает "мадам Сижу", в животе наяривает оркестр похлеще Финберговского, а солнце уже практически скатилось за горизонт. Да-да, есть такие книги, с которыми забываешь обо всем на свете: поесть, поспать, а в особо тяжелых случаях – даже сходить на работу.
                  </div>
                  <Link to={'/top'} className="button-black">Далее</Link>
              </div>
          </div>
          <div className="indexTop__numb">
              <div className="indexTop__numb-prev">01</div>
              <div className="indexTop__numb-pres">01</div>
              <div className="indexTop__numb-next">01</div>
          </div>
      </div>
  )
};

export default IndexTop;
