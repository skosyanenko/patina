import React, { Component } from 'react';
import Link from 'next/link';
import { counterReview, returnDatePublish } from 'config/config';
import paginationWrap from 'components/withPagination/paginationWrap';
import TitleOfPage from 'components/TitleOfPage';
import InputSearch from 'components/InputSearch';
import Icons from 'components/Icons';
import Loader from 'components/Loader';
import TimeToRead from 'components/TimeToRead';
import Store from 'services/Store';

class ReviewsList extends Component {
    state = {
        loading: false,
        resultTitle: ''
    };

    componentDidMount() {
        const { updateState } = this.props;
        updateState({ perPage: 3, valuesDropdown: [3, 6, 9] });

        this.getItems();
    };

    getItems = () => {
        const { reviews } = Store;
        const { fetchData, setData } = this.props;
        if (!reviews.data.length) {
            return fetchData('/api/v1/reviews')
                .then(data => {
                    this.setState({loading: false});
                    Store.setData('reviews', {data});
                })
                .catch(err => console.log(err));
        }
        setData(reviews);
    };

    search = value => {
        const { data, filterData } = this.props;

        const regExp = new RegExp(`(${value})`, 'iy');
        regExp.lastIndex = 0;
        const undefinedTitle = 'К сожалению, по вашему запросу ничего не найдено. Попробуйте еще.';
        const searchData = data.filter(item => regExp.exec(item.book.title));

        this.setState({
            resultTitle: !searchData.length && undefinedTitle
        }, () => {
            filterData(searchData);
        });
    };

    render (){
        const { loading, resultTitle } = this.state;

        const { items } = this.props;

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
                        search={this.search}
                    />
                    {!loading
                        ?
                        <>
                            {resultTitle.length > 0 && <div className="reviews__title">{resultTitle}</div>}
                            <div className="reviews">
                                { items && items.map((item, key) => (
                                    <div className="reviews__result" key={key}>
                                        <Link href={'/reviews/[id]'} as={`/reviews/${item.id}`}>
                                            <a className="reviews__result-image">
                                                <img src={item.book.bookImage} alt=""/>
                                            </a>
                                        </Link>
                                        <div className="reviews__result-wrap">
                                            <Icons likes={item.like}/>
                                            <Link href={'/reviews/[id]'} as={`/reviews/${item.id}`}>
                                                <a className="reviews__result-title">{item.book.title}</a>
                                            </Link>
                                        </div>
                                        <div className="reviews__result-wrap">
                                            <TimeToRead textLength={counterReview(item.description)}/>
                                            <span className="reviews__result-date">{returnDatePublish(item.createdAt)}</span>
                                        </div>
                                        <Link href={'/reviews/[id]'} as={`/reviews/${item.id}`}>
                                            <a className="reviews__result-subtitle">
                                                {item.title}
                                            </a>
                                        </Link>
                                        <Link href={'/profile/[id]'} as={`/profile/${userId}`}>
                                            <a className="reviews__result-user">Тетя Мотя</a>
                                        </Link>
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
