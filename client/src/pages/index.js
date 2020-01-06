import React from 'react';
import IndexTop from '../components/PageIndex/IndexTop';
import IndexTitle from '../components/PageIndex/IndexTitle';
import IndexBook from '../components/PageIndex/IndexBook';
import Patina from '../components/Patina';
import 'static/css/slick-theme.css';
import 'static/css/slick.css';
import NewsContainer from "../components/NewsBlock/View/NewsContainer";
import NewsElem from "../components/NewsBlock/View/NewsElem";
import NewsLink from "../components/NewsBlock/View/NewsLink";

const PatinaPage = () => (
    <>
        <Patina/>
            <IndexTitle
              title={'Книги'}
              subtitle={'книжная полка'}
            />
            <IndexBook/>

            <IndexTitle
              title={'Что нового'}
              subtitle={'новости из мира литературы'}
            />
            <div className="index-wrapper news__container">
                <NewsContainer/>
                <div className="news__container-content">
                    <NewsElem/>
                    <NewsElem/>
                    <NewsLink/>
                    <NewsLink/>
                    <NewsLink/>
                </div>
            </div>

            <IndexTitle
                title={'Топы'}
                subtitle={'подборки книг на различные темы'}
            />
        <IndexTop />
    </>
);

export default PatinaPage;
