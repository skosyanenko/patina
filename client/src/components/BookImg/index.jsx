import React from 'react';
import './index.sass';

const BookImg = () => {
  return (
      <div className="bookImg">
          <div className="bookImg__container">
              <img src="/images/books/1.png" alt="" className="book-img__image"/>
          </div>
          <div className="bookImg__letBig">У</div>
          <div className="bookImg__letSmall">Г</div>
          <div className="bookImg__author">
              <div className="bookImg__name">
                  уильям джеральд голдинг
              </div>
              <div className="bookImg__date">1911-1993</div>
          </div>
      </div>
  )
};

export default BookImg;
