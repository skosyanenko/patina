import React from 'react';
import Pagination from 'components/Pagination';
import TitleOfPage from 'components/TitleOfPage';
import NewsBox from './View/NewsBox';
import NewsContainer from './View/NewsContainer';
import NewsElem from './View/NewsElem';
import NewsLink from './View/NewsLink';

const NewsPage = () => (
  <>
      <TitleOfPage title={"Новости"}
                  subtitle={"новости из мира литературы"}
                  isSorting={false}
      />
      <div className="container news">
          <NewsBox
                horizontal={false}
                img="/images/news/1.png"
                title={"Книга «Ветра зимы» выйдет в 2020 году"}
                text={"Поклонники Вселенной Мартина остались недовольны финалом сериала «Игра Престолов», Петиция о пересъемке 8 сезона набирает обороты, но все же фанам придется дождаться выхода книг Джорджа Мартина, чтобы узнать альтернативный. Поклонники Вселенной Мартина остались недовольны финалом сериала «Игра Престолов», Петиция о пересъемке 8 сезона набирает обороты, но все же фанам придется дождаться выхода книг Джорджа Мартина."}
          />

          <NewsBox
                horizontal={true}
                img="/images/news/2.png"
                title={"На Западном Урале проходит эко-арт фестиваль «По следам Маяковского»"}
                text={"Поклонники Вселенной Мартина остались недовольны финалом сериала «Игра Престолов», Петиция о пересъемке 8 сезона набирает обороты, но все же фанам придется дождаться выхода книг Джорджа Мартина. Поклонники Вселенной Мартина остались недовольны финалом сериала «Игра Престолов», Петиция о пересъемке 8 сезона набирает обороты, но все же фанам придется дождаться выхода книг Джорджа Мартина."}
          />

          {/*<div className="news__container">*/}
              <NewsContainer/>
              <div className="news__container">
                  <NewsElem/>
                  <NewsElem/>
                  <NewsLink/>
                  <NewsLink/>
                  <NewsLink/>
                  {/*<Pagination/>*/}
              </div>
          {/*</div>*/}
      </div>
  </>
);

export default NewsPage;
