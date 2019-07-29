import React from "react";
import {Link} from "gatsby";
import "./index.sass";

const ListBook = () => {
  return (
      <div className="list-book">
        <Link to={'/book'} className="list-book__link">«Адвокат дъявола» Эндрю НАйдерман</Link>
        <Link to={'/book'} className="list-book__link">«Алая буква» Натаниэль Готорн</Link>
        <Link to={'/book'} className="list-book__link">«Алая смерть» Джек Лондон</Link>
        <Link to={'/book'} className="list-book__link">«Асфальт» Евгений Гришковец</Link>
        <Link to={'/book'} className="list-book__link">«Алиса в стране чудес» Лбюис Кэрол</Link>
        <Link to={'/book'} className="list-book__link">«Алиса в зазеркалье» Льюис Кэрол</Link>
        <Link to={'/book'} className="list-book__link">«А зори здесь тихие...» Борис Васильев</Link>
        <Link to={'/book'} className="list-book__link">«Алхимик» Пауло Коэльо</Link>
        <Link to={'/book'} className="list-book__link">«Ася» Иван Тургенев</Link>
        <Link to={'/book'} className="list-book__link">«Алые паруса» Александр Грин</Link>
        <Link to={'/book'} className="list-book__link">«Аргонавты. Мифы Древней Греции»</Link>
        <Link to={'/book'} className="list-book__link">«Автостопом по галактике» Дуглас Адамс</Link>
        <Link to={'/book'} className="list-book__link">«Алая нить» Лариса Райт</Link>
        <Link to={'/book'} className="list-book__link">«Анна Каренина» Лев Толстой</Link>
      </div>
  )
};

export default ListBook;
