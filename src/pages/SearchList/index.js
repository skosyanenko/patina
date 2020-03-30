import React, {Component} from 'react';
import Result from './Result';
import paginationWrap from '../../components/withPagination/paginationWrap';
import './index.sass';

const SearchWithPagination = paginationWrap(Result);

class SearchPage  extends Component {

    render () {
        const {id} = this.props.match.params;
        
        return (
            <SearchWithPagination id={id}/>
        )
    };
}

export default SearchPage;
