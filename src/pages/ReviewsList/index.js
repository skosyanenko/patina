import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { counterReview, returnDatePublish } from 'config/config';
import paginationWrap from 'components/withPagination/paginationWrap';
import TitleOfPage from 'components/TitleOfPage';
import InputSearch from 'components/InputSearch';
import Icons from 'components/Icons';
import Loader from 'components/Loader';
import TimeToRead from 'components/TimeToRead';
import './index.sass';

class ReviewsList extends Component {
    state = {
        loading: false,
        result: '',
        perPage: 3,
        valuesDropdown: [3, 6, 9]
    };

    componentDidMount() {
        const { updateState } = this.props;
        const { perPage, valuesDropdown } = this.state;
        updateState({ perPage, valuesDropdown });

        this.props.fetchData('/api/v1/review')
            .then(() => this.setState({loading: false}))
            .catch(err => console.log(err));
    };

    hookState = (name, value) => this.setState({[name]: value});

    render (){
        const { loading, result } = this.state;

        const { items, fetchData, data, filterData } = this.props;

        return (
            <>
                <TitleOfPage
                    title={"Критика"}
                    subtitle={"рецензи на книги различных авторов и жанров"}
                    classNamePrefix="page__wrap-subtitle--reviews"
                />
                <div className="container__reviews">
                    <InputSearch
                        classNamePrefix="quest--position"
                        hook={this.hookState}
                        fetchData={fetchData}
                        filterData={filterData}
                        data={data}
                        items={items}
                    />
                    {!loading
                        ?
                        <>
                            <div className="search__title">{result}</div>
                            <div className="reviews">
                                { items && items.map((item, key) => (
                                    <div className="reviews__result" key={key}>
                                        <Link to={`/reviews/${item.id}`} className="reviews__result-image">
                                            <img src={item.book.bookImage} alt=""/>
                                        </Link>
                                        <div className="reviews__result-wrap">
                                            <Icons likes={item.like}/>
                                            <Link to={`/reviews/${item.id}`} className="reviews__result-title">
                                                {item.book.title}
                                            </Link>
                                        </div>
                                        <div className="reviews__result-wrap">
                                            <TimeToRead textLength={counterReview(item.description)}/>
                                            <span className="reviews__result-date">{returnDatePublish(item.createdAt)}</span>
                                        </div>
                                        <Link to={`/reviews/${item.id}`} className="reviews__result-subtitle">
                                            {item.title}
                                        </Link>
                                        <Link to={'/'} className="reviews__result-user">Тетя Мотя</Link>
                                    </div>
                                ))}
                            </div>
                            {this.props.pagination || ''}
                        </>
                        :
                        <Loader/>
                    }
                </div>
            </>
        )
    }
}

export default paginationWrap(ReviewsList);
