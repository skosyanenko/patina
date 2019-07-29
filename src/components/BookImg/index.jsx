import React from "react";
import "./index.sass";

const BookImg = () => {
  return (
      <div className="book-img">
          <div className="book-img__container">
              <img src={require('static/images/books/1.png')} alt="" className="book-img__image"/>
          </div>
          <div className="book-img__let-big">У</div>
          <div className="book-img__let-small">Г</div>
          <div className="book-img__author">
              <div className="book-img__name">
                  уильям джеральд голдинг
              </div>
              <div className="book-img__date">1911-1993</div>
          </div>
      </div>
  )
};

export default BookImg;
