import React, { Component } from 'react';
import Link from 'next/link';
import paginationWrap from 'components/withPagination/paginationWrap';
import InputSearch from 'components/InputSearch';
import Loader from 'components/Loader';
import Store from 'services/Store';

class SearchList  extends Component {
    state = {
        loading: false,
        resultTitle: '',
        category: ''
    };

    componentDidMount() {
        const { updateState } = this.props;

        updateState({ perPage: 9, valuesDropdown: [9, 18, 27],});

        Store.getAll();
    };

    search = value => {
        const { data, filterData } = this.props;

        const regExp = new RegExp(`(${value})`, 'iy');
        regExp.lastIndex = 0;
        const undefinedTitle = 'К сожалению, по вашему запросу ничего не найдено. Попробуйте еще.';
        const searchData = data.filter(item => regExp.exec(item.book.title));

        this.setState({
            resultTitle: !searchData.length ? undefinedTitle : 'результаты: '
        }, () => {
            filterData(searchData);
        });
    };

    render (){
        const { loading, resultTitle } = this.state;
        const { items } = this.props;

        return (
            <div className="search">
                <InputSearch classNamePrefix="quest--searchResults"/>
                {!loading
                    ?
                    <>
                        <div className="search__title">{resultTitle}</div>
                        <div className="search__result">
                            {items && items.map((item, key) => (
                                <div className="results"
                                     key={key}
                                     itemType="https://schema.org/Book"
                                     itemProp="book"
                                     itemScope
                                >
                                    <Link href={'/books/[id]'} as={`/books/${item.id}`}>
                                        <a className="results__img">{item.title}</a>
                                    </Link>
                                </div>
                            ))}
                        </div>
                        {items.length ? this.props.pagination : ''}
                    </>
                    :
                    <Loader/>
                }
            </div>
        )
    };
}

export default paginationWrap(SearchList);
