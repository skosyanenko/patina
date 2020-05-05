import React, { Component } from 'react';
import ViewReview from 'components/ComponentsReviews/Components/ViewReview';
import paginationWrap from 'components/withPagination/paginationWrap';
import TitleOfPage from 'components/TitleOfPage';
import InputSearch from 'components/InputSearch';
import Loader from 'components/Loader';
import axios from 'axios';

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
        this.setState({loading: false});
        setData({ data: serverData });
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

        const { items, toggleModal } = this.props;

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
                                    <ViewReview item={item} key={key} toggleModal={toggleModal}/>
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
