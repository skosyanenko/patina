import React from 'react';
import Tops from './Tops';
import Title from './Title';
import Books from './Books';
import Patina from './Patina';
import MainTimeline from './TimeLine';
import NewsBlock from '../NewsList/View/NewsBlock';
import NewsElem from '../NewsList/View/NewsElem';
import NewsLink from '../NewsList/View/NewsLink';
import 'static/css/slick-theme.css';
import 'static/css/slick.css';

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

        <div className="main news">
            <NewsBlock/>
            <NewsElem/>
            <NewsElem/>
            <NewsLink/>
            <NewsLink/>
            <NewsLink/>
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
