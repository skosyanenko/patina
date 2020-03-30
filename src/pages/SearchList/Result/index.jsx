import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Rating from '../../../components/Rating';
import InputSearch from '../../../components/InputSearch';
import Loader from '../../../components/Loader';
import {returnAuthor} from '../../../config/config';
import axios from "axios";

class Result extends Component {
    state = {
        perPage: 9,
        valuesDropdown: [9, 18, 27],
        loading: false,
        result: '',
        category: ''
    };

    componentDidMount() {
        const { id, updateState } = this.props;
        const { perPage, valuesDropdown } = this.state;

        updateState(perPage, valuesDropdown);

        id && this.fetchBooksByCategories(id);
    };

    fetchBooksByCategories = (id) => {
        const { fetchData } = this.props;
        fetchData(`/api/v1/search-category/${id}`)
            .then(() => this.fetchCurrentCategory(id))
            .then(() => this.setState({loading: false, result: `результаты поиска по категории «${this.state.category}»`}))
            .catch(err => console.log(err));

    };

    fetchCurrentCategory = async (id) => {
        return await axios.get(`/api/v1/categories/${id}`)
            .then(res => {
                if (res.data) {
                    this.setState({category: res.data.title})}
            })
            .catch(err => {
                console.log('Ошибка получения элементов из бд' + err)
            });
    };

    hookState = (name, value) => this.setState({[name]: value});

    render () {
        const { loading, result } = this.state;

        const { items, fetchData } = this.props;

        return (
            <div className="search">
                <InputSearch classNamePrefix="quest--searchResults"
                             fetchData={fetchData}
                             items={items}
                             hook={this.hookState}
                />
                {!loading
                    ?
                    <>
                        <div className="search__title">{result}</div>
                        <div className="search__result">
                            {items && items.map((item, key) => (
                                <div className="results" key={key}>
                                    <Link to={`/books/${item.id}`} className="results__img">
                                        <img src={item.coverImage} alt=""/>
                                    </Link>
                                    <div className="results__wrapper">
                                        <Link to={`/books/${item.id}`} className="results__wrapper-title">{item.title}</Link>
                                        <h3 className="results__wrapper-author">{returnAuthor(item.authors)}</h3>
                                        <Rating ratingTotal={item.ratingTotal}/>
                                        <span className="results__wrapper-weight">{item.weight} стр.</span>
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

export default Result;