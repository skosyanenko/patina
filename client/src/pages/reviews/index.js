import React, { Component } from 'react';
import Link from 'next/link';
import { counterLetters, returnDatePublish } from 'config/config';
import paginationWrap from 'components/withPagination/paginationWrap';
import TitleOfPage from 'components/TitleOfPage';
import InputSearch from 'components/InputSearch';
import Icons from 'components/Icons';
import Loader from 'components/Loader';
import TimeToRead from 'components/TimeToRead';
import Store from 'services/Store';
import axios from "axios";

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
        const { setData, serverData } = this.props;
        if (!Store.reviews.data.length) {
            this.setState({loading: false});
            Store.setData('reviews', { data: serverData });
        }
        setData(Store.reviews);
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
                                { items && items.map(({ id, book, description, created_at, title, userId, like }, key) => (
                                    <div className="reviews__result" key={key}>
                                        <Link href={'/reviews/[id]'} as={`/reviews/${id}`}>
                                            <a className="reviews__result-image">
                                                {book.bookImage && <img src={`${process.env.API_URL}${book.bookImage.url}`} alt=""/>}
                                            </a>
                                        </Link>
                                        <div className="reviews__result-wrap">
                                            <Icons likes={like}/>
                                            <Link href={'/reviews/[id]'} as={`/reviews/${id}`}>
                                                <a className="reviews__result-title">{book.title}</a>
                                            </Link>
                                        </div>
                                        <div className="reviews__result-wrap">
                                            <TimeToRead textLength={counterLetters(description)}/>
                                            <span className="reviews__result-date">{returnDatePublish(created_at)}</span>
                                        </div>
                                        <Link href={'/reviews/[id]'} as={`/reviews/${id}`}>
                                            <a className="reviews__result-subtitle">
                                                {title}
                                            </a>
                                        </Link>
                                        <Link href={'/profile/[id]'} as={`/profile/${userId}`}>
                                            <a className="reviews__result-user">Тетя Мотя</a>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                            {items.length > 0 ? this.props.pagination : ''}
                        </>
                        :
                        <Loader/>
                    }
                </div>
            </>
        )
    }
}

export async function getServerSideProps() {
    const { API_URL } = process.env;

    const serverData = await axios.get(`${API_URL}/reviews`)
        .then(res => res.data)
        .catch(err => console.log(err));

    return { props: { serverData } };
}

export default paginationWrap(ReviewsList);
