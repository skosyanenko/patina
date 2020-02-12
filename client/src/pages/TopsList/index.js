import React from 'react';
import Pagination from 'components/Pagination';
import TitleOfPage from 'components/TitleOfPage';
import Selection from './Selection';
import Picture from './Picture';

const TopsPage = () => (
    <>
        <TitleOfPage
            title={"Топы"}
            subtitle={"подборки книг на различные темы"}
            isSorting={false}
        />
        <div className="container container--top-detail">
            <Picture/>
            <div className="container__container-top">
                <Selection/>
                {/*<Pagination/>*/}
            </div>
        </div>
    </>
);

export default TopsPage;
