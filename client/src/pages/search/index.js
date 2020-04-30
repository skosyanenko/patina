import React, { Component } from 'react';
import { withRouter } from 'next/router';
import axios from 'axios';
import paginationWrap from 'components/withPagination/paginationWrap';
import FiltersSearch from 'components/ComponentsSearch/FiltersSearch';
import ViewBook from 'components/ComponentsSearch/Views/ViewBook';
import ViewReview from 'components/ComponentsReviews/Components/ViewReview';
import NewsHorizontal from 'components/ComponentsNews/NewsHorizontal';
import ViewChart from 'components/ComponentsSearch/Views/ViewChart';
import InputSearch from 'components/InputSearch';
import Loader from 'components/Loader';
import { counterLetters } from 'config/config';

class SearchList  extends Component {
    state = {
        query: '',
        loading: false,
        resultTitle: '',
        filters: '',
        options: [],
        categoryName: ''
    };

    componentDidMount() {
        const { updateState, router: {query} } = this.props;
        updateState({ perPage: 6, valuesDropdown: [6, 12, 18],});
    };

    componentDidUpdate(prevProps, prevState) {
        const { filters } = this.state;
        const {router: {query}} = this.props;

        if (prevState.filters !== filters && filters.length > 0) {
            if (filters === 'books' || filters === 'authors' || filters === 'category') {
                this.getItems('books', '?_limit=500');
            } else {
                this.getItems(`${filters}`, '?_limit=500');
            }
        }

         if (prevProps.query !== query && this.state.query !== query ) {
             const p1 = this.getCategory(query.category);
             const p2 = this.getItems(`books?categories.id=${query.category}`, '');
             Promise.all([
               p1, p2
             ]).then(result => {
                 console.log(result);
                 this.setState({
                     query,
                     loading: false,
                     resultTitle: `результаты поиска по категории «${result[0]}»`,
                     filters: 'category'
                 })
             })
         }
    };

    getItems = (rout, limit) => {
        const { API_URL } = process.env;
        const { fetchData } = this.props;
        return fetchData(`${API_URL}/${rout}${limit}`).catch(err => console.log(err));
    };

    getCategory = (id) => {
        const { API_URL } = process.env;
        return axios.get(`${API_URL}/categories/${id}`)
            .then(data => {
                return data.data.title
            })
            .catch(err => console.log(err));
    }

    search = value => {
        const { data, filterData } = this.props;
        const { filters } = this.state;

        const regExp = new RegExp(`(${value})`, 'iy');
        regExp.lastIndex = 0;
        const undefinedTitle = 'К сожалению, по вашему запросу ничего не найдено. Попробуйте еще.';
        let searchData = [];
        if ( filters === 'reviews') {
            searchData = data.filter(item => regExp.exec(item.book.title));
        } else {
            searchData = data.filter(item => regExp.exec(item.title));
        }

        this.setState({
            options: searchData,
            resultTitle: !searchData.length ? undefinedTitle : 'результаты: '
        }, () => {
            filterData(searchData);
        });
    };

    typeSwitcher = type => {
        switch (type) {
            case 'books':
            case 'authors':
            case 'category':
                return ViewBook;
            case 'charts':
                return ViewChart;
            case 'reviews':
                return ViewReview;
            case 'articles':
                return NewsHorizontal;
            default:
                return '';
        }
    };

    updateFilter = (newState = {}) => {
        this.setState({...newState})
    };

    render (){
        const { loading, resultTitle, filters, options } = this.state;
        const { items } = this.props;

        return (
            <div className="search">
                <FiltersSearch
                    updateFilter={this.updateFilter}
                    filters={filters}
                />
                <InputSearch
                    search={this.search}
                    showOptions={true}
                    options={options}
                    classNamePrefix="quest--searchResults"
                />
                {!loading
                    ?
                    <>
                        <div className="search__title">{resultTitle}</div>
                        <div className={`search__result ${filters === 'reviews' ? 'reviews': ''}`}>
                            {items && items.map((item, key) => {
                                const Component = this.typeSwitcher(filters);
                                const datePublish = new Date(item.created_at).toLocaleDateString();
                                //const text = filters ==='articles' ? counterLetters(item.description) : ''
                                return (
                                    <Component
                                        key={key}
                                        item={item}
                                        //textLength={text}
                                        date={datePublish}
                                    />
                                )
                            })}
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

export default withRouter(paginationWrap(SearchList));
