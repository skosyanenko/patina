import React, {Component} from 'react';
import Result from './Result';
import InputSearch from 'components/InputSearch';
import paginationWrap from '../../components/withPagination/paginationWrap';
import './index.sass';

const SearchWithPagination = paginationWrap(Result);

class SearchPage  extends Component {
    render () {
        const {id} = this.props.match.params;
        return (
            <div className="search">
                <InputSearch classNamePrefix="quest--searchResults"/>
                <div className="search__title">результаты поиска:</div>
                <SearchWithPagination id={id}/>
            </div>
        )
    }
}

export default SearchPage;
