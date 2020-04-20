import React from 'react'
import Link from 'next/link';

const UndefinedPage = () => (
  <div className="undefined-page">
      <div className="undefined-page__wrap">
          <span className="undefined-page__wrap-title">Пэйдж нот фаунд.</span>
          <span className="undefined-page__wrap-description">
                К сожалению, такой страницы нет. Возможно, вы ввели неправильный адрес или страница была удалена с сервера.
            </span>
          <Link href={'/'}>
              <a className="button button-green">На главную</a>
          </Link>
      </div>
      <div className="undefined-page__image"/>
  </div>
);

export default UndefinedPage;
