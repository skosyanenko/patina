import React from 'react';
import Pagination from '../components/Pagination';
import Search from '../components/Search';
import PageSearch from '../components/PageSearch';

const SearchPage = () => (
    <>
        <div className="searchPage">
            <Search
                classNamePrefix="search--pageSearch"
            />

            <PageSearch/>
        </div>

        {/*<Pagination*/}
        {/*    classNamePrefix="container--search"*/}
        {/*/>*/}
    </>
);

export default SearchPage;
