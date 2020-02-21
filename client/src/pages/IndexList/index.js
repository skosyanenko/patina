import React from 'react';
import Tops from './Tops';
import Title from './Title';
import Books from './Books';
import Patina from './Patina';
import MainTimeline from './TimeLine';
import NewsBlock from '../NewsList/View/NewsBlock';
import 'static/css/slick-theme.css';
import 'static/css/slick.css';
import NewsElem from "../NewsList/View/NewsElem";
import NewsLink from "../NewsList/View/NewsLink";

const PatinaPage = () => (
    <>
        <Patina/>

        <Title
            title={'Книги'}
            subtitle={'книжная полка'}
        />

        <Books/>

        <Title
            title={'Что нового'}
            subtitle={'новости из мира литературы'}
        />

        <div className="main news__container">
            <NewsBlock/>
            <div>
                <NewsElem/>
                <NewsElem/>
                <NewsLink/>
                <NewsLink/>
                <NewsLink/>
            </div>
        </div>

        <Title
            title={'Топы'}
            subtitle={'подборки книг на различные темы'}
        />

        <Tops />

        <MainTimeline/>
    </>
);

export default PatinaPage;
