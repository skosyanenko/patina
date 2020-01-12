import React from 'react';
import Pagination from '../components/Pagination';
import SectionTop from '../components/SectionTop';
import ListTop from '../components/PageTops/ListTop';
import TopImg from '../components/PageTops/TopImg';

const TopsPage = () => (
    <>
        <SectionTop
            title={"Топы"}
            subtitle={"подборки книг на различные темы"}
            isSorting={false}
        />
        <div className="content">
            <TopImg/>
            <div className="content__containerTop">
                <ListTop/>
                {/*<Pagination/>*/}
            </div>
        </div>
    </>
);

export default TopsPage;
