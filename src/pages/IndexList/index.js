import React from 'react';
import Tops from './Tops';
import Title from './Title';
import Books from './Books';
import Patina from './Patina';
import MainTimeline from './TimeLine';
import News from './News';
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

        <News/>

        <Title
            title={'Топы'}
            subtitle={'подборки книг на различные темы'}
        />

        <Tops />

        <MainTimeline/>

    </>
);

export default PatinaPage;
