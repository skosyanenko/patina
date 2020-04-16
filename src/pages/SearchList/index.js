import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { returnAuthor } from 'config/config';
import paginationWrap from 'components/withPagination/paginationWrap';
import InputSearch from 'components/InputSearch';
import Rating from 'components/Rating';
import Loader from 'components/Loader';
import './index.sass';

class SearchList  extends Component {
    state = {
        perPage: 9,
        valuesDropdown: [9, 18, 27],
        loading: false,
        result: '',
        category: ''
    };

    componentDidMount() {
        const { id } = this.props.match.params;
        const { updateState } = this.props;
        const { perPage, valuesDropdown } = this.state;

        updateState({ perPage, valuesDropdown });

        id && this.fetchBooksByCategories( id );
    };

    fetchBooksByCategories = id => {
        const { fetchData } = this.props;
        fetchData(`/api/v1/search-category/${id}`)
            .then(() => this.fetchCurrentCategory(id))
            .then(() => this.setState({loading: false, result: `результаты поиска по категории «${this.state.category}»`}))
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

    hookState = ( name, value ) => this.setState({[name]: value});

    render (){
        const { loading, result } = this.state;
        const { items, fetchData } = this.props;

        return (
            <div className="search">
                <InputSearch classNamePrefix="quest--searchResults"
                    hook={this.hookState}
                    fetchData={fetchData}
                    items={items}
                />
                {!loading
                    ?
                    <>
                        <div className="search__title">{result}</div>
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
