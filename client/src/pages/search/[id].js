import React, { Component } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { returnAuthor } from 'config/config';
import paginationWrap from 'components/withPagination/paginationWrap';
import InputSearch from 'components/InputSearch';
import Rating from 'components/Rating';
import Loader from 'components/Loader';
import Store from 'services/Store';

class SearchList  extends Component {
    state = {
        loading: false,
        resultTitle: '',
        category: ''
    };

    componentDidMount() {
        //const { id } = this.props.match.params;
        const { updateState } = this.props;

        updateState({ perPage: 9, valuesDropdown: [9, 18, 27],});

         //this.getItems();
console.log(this.props.serverData)
        Store.getAll();
    };

    // getItems = () => {
    //     const { serverData, serverDataCategory, setData } = this.props;
    //     setData(serverData);
    //     //this.setState({ resultTitle: `результаты поиска по категории «${serverDataCategory}»` })
    // };

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
                                        <a className="results__img">
                                            <img src={item.coverImage} alt="" itemProp="image"/>
                                        </a>
                                    </Link>
                                    <div className="results__wrapper">
                                        <Link href={'/books/[id]'} as={`/books/${item.id}`}>
                                            <a className="results__wrapper-title" itemProp="name">
                                                {item.title}
                                            </a>
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

export async function getServerSideProps({ params }) {
    const { API_URL } = process.env;

    // const serverDataCategory = await axios.get(`${API_URL}/category/${params.id}`)
    //     .then(res => res.data)
    //     .catch(err => console.log(err));

    const serverData = await axios.get(`${API_URL}/books?categories.id=${params.id}`)
        .then(res => res.data)
        .catch(err => console.log(err));

    return { props: { serverData } };
}

export default paginationWrap(SearchList);
