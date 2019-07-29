import React from "react";
import "./index.sass";
import {Link} from "gatsby";

const ListTop = () => {
  return (
      <div className="list-top">
        <Link to={'/top'} className="list-top__link">ТОП 10 </Link>
        <Link to={'/top'} className="list-top__link">Книги по психологи</Link>
        <Link to={'/top'} className="list-top__link">ТОП зарубежной классики</Link>
        <Link to={'/top'} className="list-top__link">Экранизированые книги</Link>
        <Link to={'/top'} className="list-top__link">Антиутопии</Link>
        <Link to={'/top'} className="list-top__link">Книги, от которых трудно оторваться</Link>
        <Link to={'/top'} className="list-top__link">Вокруг света за 80 книг</Link>
        <Link to={'/top'} className="list-top__link">Растащено на цитаты</Link>
        <Link to={'/top'} className="list-top__link">Книги о книгах</Link>
        <Link to={'/top'} className="list-top__link">Параллельный сюжет</Link>
      </div>
  )
};

export default ListTop;
