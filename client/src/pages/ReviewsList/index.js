import React from 'react';
import Pagination from 'components/Pagination';
import TitleOfPage from 'components/TitleOfPage';
import InputSearch from 'components/InputSearch';
import Reviews from './Reviews';

const ReviewsPage = () => (
    <>
        <TitleOfPage
            title={"Критика"}
            subtitle={"рецензи на книги различных авторов и жанров"}
            isSorting={false}
            classNamePrefix="page__wrap-subtitle--reviews"
        />

        <div className="container">
            <InputSearch classNamePrefix="quest--position"/>

            <Reviews/>
        </div>

        {/*<Pagination*/}
        {/*    classNamePrefix="pagination--view"*/}
        {/*/>*/}
    </>
);

export default ReviewsPage;
