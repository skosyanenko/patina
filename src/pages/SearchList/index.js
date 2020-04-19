import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { returnAuthor } from 'config/config';
import paginationWrap from 'components/withPagination/paginationWrap';
import InputSearch from 'components/InputSearch';
import Rating from 'components/Rating';
import Loader from 'components/Loader';
import Store from 'services/Store';
import './index.sass';

class SearchList  extends Component {
    state = {
        loading: false,
        resultTitle: '',
        category: ''
    };

    componentDidMount() {
        const { id } = this.props.match.params;
        const { updateState } = this.props;

        updateState({ perPage: 9, valuesDropdown: [9, 18, 27],});

        id && this.fetchBooksByCategories( id );

        Store.getAll();
    };

    fetchBooksByCategories = id => {
        const { fetchData } = this.props;
        fetchData(`/api/v1/search-category/${id}`)
            .then(() => this.fetchCurrentCategory(id))
            .then(() => this.setState({
                loading: false,
                resultTitle: `результаты поиска по категории «${this.state.category}»`
            }))
            .catch(err => console.log(err));
    };

    fetchCurrentCategory = async id => {
        return await axios.get(`/api/v1/categories/${id}`)
            .then(res => {
                if (res.data) {
                    this.setState({category: res.data.title})}
            })
            .catch(err => {
                console.log('Ошибка получения элементов из базы данных' + err)
            });
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
                                    <Link to={`/books/${item.id}`} className="results__img">
                                        <img src={item.coverImage} alt="" itemProp="image"/>
                                    </Link>
                                    <div className="results__wrapper">
                                        <Link to={`/books/${item.id}`} className="results__wrapper-title" itemProp="name">
                                            {item.title}
                                        </Link>
                                        <h3 className="results__wrapper-author" itemProp="author">{returnAuthor(item.authors)}</h3>
                                        <Rating ratingTotal={item.ratingTotal}/>
                                        <span className="results__wrapper-weight" itemProp="numberOfPages">
                                            {item.weight} стр.
                                        </span>
                                    </div>
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
