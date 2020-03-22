import React, {Component} from 'react';
import ResultList from './ResultList';
import InputSearch from 'components/InputSearch';
import paginationWrap from '../../components/withPagination/paginationWrap';
import './index.sass';

const SearchWithPagination = paginationWrap(ResultList);

class SearchPage  extends Component {

    render () {
        return (
            <div className="search">
                <InputSearch classNamePrefix="quest--searchResults"/>
                <div className="search__title">результаты поиска:</div>
                <SearchWithPagination/>
            </div>
        )
    }
}

export default SearchPage;
