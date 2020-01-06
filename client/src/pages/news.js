import React from 'react';
import Pagination from '../components/Pagination';
import SectionTop from '../components/SectionTop';
import NewsBox from '../components/NewsBlock/View/NewsBox';
import NewsContainer from '../components/NewsBlock/View/NewsContainer';
import NewsElem from "../components/NewsBlock/View/NewsElem";
import NewsLink from "../components/NewsBlock/View/NewsLink";

const NewsPage = () => (
  <>
      <SectionTop title={"Новости"}
                  subtitle={"новости из мира литературы"}
                  isSorting={false}
      />
      <div className="content news">
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

          <div className="news__container">
              <NewsContainer/>
              <div className="news__container-content">
                  <NewsElem/>
                  <NewsElem/>
                  <NewsLink/>
                  <NewsLink/>
                  <NewsLink/>
                  <Pagination/>
              </div>
          </div>
      </div>
  </>
);

export default NewsPage;
