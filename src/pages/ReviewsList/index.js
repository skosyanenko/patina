import React from 'react';
import TitleOfPage from 'components/TitleOfPage';
import InputSearch from 'components/InputSearch';
import paginationWrap from 'components/withPagination/paginationWrap';
import Reviews from './Reviews';
import './index.sass';

const ReviewsWithPagination = paginationWrap(Reviews);

const ReviewsList = () => (
    <>
        <TitleOfPage
            title={"Критика"}
            subtitle={"рецензи на книги различных авторов и жанров"}
            classNamePrefix="page__wrap-subtitle--reviews"
        />

        <div className="container">
            <InputSearch classNamePrefix="quest--position"
            />

            <ReviewsWithPagination/>
        </div>
    </>
);

export default ReviewsList;
