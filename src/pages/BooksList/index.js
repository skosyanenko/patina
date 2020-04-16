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
import Store from 'services/Store';

class BooksList extends Component {
    state = {
        activeLetter: '',
        sorting: '',
        resultTitle: '',
        loading: false,
        isBlur: false,
        alphabet: [],
        perPage: 9,
        valuesDropdown: [9, 18, 27]
    };

    componentDidMount() {
        const { updateState } = this.props;
        const { perPage, valuesDropdown } = this.state;
        updateState({perPage, valuesDropdown});
        this.getItems();
    };

    getItems = () => {
        const {books} = Store;
        const { fetchData, setData } = this.props;
        if (!books.data.length) {
            return fetchData('/api/v1/books')
              .then(data => {
                  this.setState({loading: false});
                  Store.setData('books', {data});
              })
              .catch(err => console.log(err));
        }

        setData(books);
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

    search = value => {
        const { data, filterData, match } = this.props;

        if (match.path !== '/search/:id') {
            const regExp = new RegExp(`(${value})`, 'iy');
            regExp.lastIndex = 0;
            const undefinedTitle = 'К сожалению, по вашему запросу ничего не найдено. Попробуйте еще.';
            const searchData = data.filter(item => regExp.exec(item.title /*location === '/reviews' && item.book.title*/));

            this.setState({
                activeLetter: '',
                isBlur: false,
                resultTitle: !searchData.length && undefinedTitle
            }, () => {
                filterData(searchData);
            });
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
            alphabet: [...new Set(letters)]
        });
    };

    updateState = (newState = {}) => {
        this.setState({...newState})
    };

    render() {
        const { isBlur, activeLetter, alphabet, loading, resultTitle, sorting } = this.state;
        const { items } = this.props;

        return (
            <>
                <div className="books-title">
                    <TitleOfPage title={"Книги"} subtitle={"книжная полка"}/>
                    <Sorting updateState={this.updateState}/>
                </div>

                <div className='container'>
                    <div className="container__container-book">
                        <InputSearch
                            search={this.search}
                            activeLetter={activeLetter}
                            sorting={sorting}
                        />

                        <Sorting updateState={this.updateState}/>

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
                    <div
                        itemScope
                        className='container__container-book'
                        itemType="http://schema.org/ItemList http://schema.org/CreativeWork"
                    >
                        {!loading
                            ?
                            <div className="list-book"
                                 itemProp="itemListElement"
                                 itemScope itemType="http://schema.org/ListItem"
                            >
                                <div className="search__title">{resultTitle}</div>
                                {items && items.map((book, key) => (
                                    <Link to={`/books/${book.id}`}
                                        key={key}
                                        className="list-book__link"
                                        itemProp="url"
                                        content={`patina.ru/books/${book.id}`}
                                    >
                                        <span itemProp="position" content={key}>
                                            {`«${book.title}» `}{book.authors.map(author => author.name)}
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
