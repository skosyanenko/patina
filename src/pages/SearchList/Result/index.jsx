import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Rating from 'components/Rating';
import Loader from '../../../components/Loader';
import {returnAuthor} from '../../../config/config';

class Result extends Component {
    state = {
        loading: true,
        perPage: 9,
        valuesDropdown: [9, 18, 27]
    };

    componentDidMount() {
        const { id, updateState } = this.props;
        const { perPage, valuesDropdown } = this.state;

        updateState(perPage, valuesDropdown);

        id && this.fetchBooksByCategories(id);
    }

    fetchBooksByCategories = (id) => {
        const { fetchData } = this.props;
        fetchData(`/api/v1/search-category/${id}`)
            .then(() => this.setState({loading: false}))
            .catch(err => console.log(err));
    };

    render () {
        const {loading} = this.state;

        if (loading) return <Loader/>;

        const {items} = this.props;

        return (
            <>
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
                {this.props.pagination || ''}
            </>
        )
    };
}

export default Result;