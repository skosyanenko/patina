import React from 'react';
import Pagination from '../components/Pagination';
import SectionTop from '../components/SectionTop';
import Search from '../components/Search';
import ReviewsContainer from '../components/PageReviews';

const ReviewsPage = () => (
    <>
        <SectionTop title={"Критика"}
            subtitle={"рецензи на книги различных авторов и жанров"}
            isSorting={false}
            classNamePrefix="section__subtitle--reviews"
        />

        <div className="content">
            <Search
                classNamePrefix="search--position"
            />

            <ReviewsContainer/>
        </div>

        <Pagination
            classNamePrefix="container--view"
        />
    </>
);

export default ReviewsPage;
