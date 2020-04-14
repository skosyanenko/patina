import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sortBy from 'lodash.sortby';
import { sortParams } from 'config/config';
import paginationWrap from 'components/withPagination/paginationWrap';
import TitleOfPage from 'components/TitleOfPage';
import InputSearch from 'components/InputSearch';
import Sorting from 'components/Sorting';
import Loader from 'components/Loader';
import './index.sass';

class BooksList extends Component {
    state = {
        activeLetter: '',
        sorting: '',
        result: '',
        loading: false,
        isBlur: false,
        alphabet: [],
        perPage: 9,
        valuesDropdown: [9, 18, 27]
    };

    componentDidMount() {
        const { fetchData, updateState } = this.props;
        const { perPage, valuesDropdown } = this.state;

        updateState(perPage, valuesDropdown);
        fetchData('/api/v1/books')
            .then(() => this.setState({loading: false}))
            .catch(err => console.log(err));
    };

    componentDidUpdate(prevProps, prevState) {
        const { data, filteredData } = this.props;
        const { sorting, activeLetter } = this.state;

        if (prevProps.data !== data) {
            this.getFirstLetters();
        }

        if (prevState.activeLetter !== activeLetter) {
            this.filterByLetter();
        }

        if (prevState.sorting !== sorting) {
            this.sort(data);
        }

        if (activeLetter.length > 0 && prevState.sorting !== sorting) {
            this.sort(filteredData);
        }
    };

    sortInterceptor = (key, data) => {
        switch (key) {
            case 'title':
                return sortBy(data, [key]);
            case 'authors':
                return sortBy(data, o => o.authors[0].name);
            default:
                return data;
        }
    };

    sort = (data) => {
        const { filterData } = this.props;
        const { sorting } = this.state;

        if (sorting) {
            const { key } = sortParams.find(item => item.title === sorting);
            const sorted = this.sortInterceptor(key, data);
            return filterData(sorted);
        }

        filterData(data);
    };

    filterByLetter = () => {
        const { data, filterData } = this.props;
        const { activeLetter } = this.state;

        const filteredBooks = data.filter(book => {
            return book.title && book.title[0] === activeLetter;
        });
        const result = activeLetter.length ? filteredBooks : data;

        this.setState({result: ''});

        filterData(result);
    };

    showLetter = letter => {
        this.setState(prevState => ({
            isBlur: !prevState.isBlur,
            activeLetter: !prevState.isBlur ? letter : ''
        }));
    };

    getFirstLetters = () => {
        const { data } = this.props;
        const letters = data.map(book => book.title && book.title[0]).sort();
        this.setState({
            alphabet: ('letters', [...new Set(letters)])
        });
    };

    hookState = (name, value) => this.setState({[name]: value});

    render() {
        const { isBlur, activeLetter, alphabet, loading, result, sorting } = this.state;
        const { items, fetchData, data, filterData } = this.props;

        return (
            <>
                <div className="books-title">
                    <TitleOfPage title={"Книги"} subtitle={"книжная полка"}/>
                    <Sorting hook={this.hookState}/>
                </div>
                <div className='container'>
                    <div className="container__container-book">
                        <InputSearch
                            hook={this.hookState}
                            fetchData={fetchData}
                            filterData={filterData}
                            data={data}
                            items={items}
                            isActiveLetter={activeLetter.length > 0}
                            isSorting={sorting.length > 0}
                        />
                        <Sorting hook={this.hookState}/>
                        <div className={`alphabet ${isBlur ? 'alphabet--blur' : ''}`}>
                            { alphabet && alphabet.map((item, key) => (
                                <div className="alphabet__letter"
                                     key={key}
                                     onClick={() => this.showLetter(item)}
                                >
                                    {item}
                                </div>
                            ))}
                            <div className={`alphabet__invisible ${isBlur ? 'alphabet__active' : ''}`}>
                            { activeLetter && activeLetter.length > 0 && isBlur ? activeLetter : '' }
                            </div>
                        </div>
                    </div>
                    <div className='container__container-book'
                         itemScope
                         itemType="http://schema.org/ItemList http://schema.org/CreativeWork"
                    >
                        {!loading
                            ?
                            <div className="list-book"
                                 itemProp="itemListElement"
                                 itemScope itemType="http://schema.org/ListItem"
                            >
                                <div className="search__title">{result}</div>
                                { items && items.map((book, key) => (
                                    <Link to={`/books/${book.id}`}
                                        key={key}
                                        className="list-book__link"
                                        itemProp="url"
                                        content={`patina.ru/books/${book.id}`}
                                    >
                                        <span itemProp="position" content={key}>
                                            {/*${book.authors.map(author => author.name)}*/}
                                            {`«${book.title}» `}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                            :
                            <Loader/>
                        }
                        {this.props.pagination || ''}
                    </div>
                </div>
            </>
        );
    }
}

export default paginationWrap(BooksList);
