import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sortBy from 'lodash.sortby';
import { sortParams } from 'config/config';
import Loader from 'components/Loader';

class ListBooks extends Component {
    state = {
        loading: false,
        perPage: 9,
        valuesDropdown: [9, 18, 27]
    };

    componentDidMount() {
        const { perPage, valuesDropdown } = this.state;
        const { updateState, fetchData } = this.props;

        updateState(perPage, valuesDropdown);
        fetchData('/api/v1/books')
            .then(() => this.setState({loading: false}), () => this.props.hook('letter', this.state.activeLetter))
            .catch(err => console.log(err));
    };

    componentDidUpdate(prevProps) {     
        const { letter, data, sorting } = this.props;

        if (prevProps.letter !== letter) {
            this.filterByLetter();
        }

        if (prevProps.data !== data) {
            this.getFirstLetters();
        }

        if (prevProps.sorting !== sorting) {            
            this.sort();
        }
    };

    sort = () => {
        const { sorting, data, filterData } = this.props;
        if (sorting) {
            const {key} = sortParams.find(item => item.title === sorting);
            if( key === 'title') {
                const sorted = sortBy(data, [key]);
                return filterData(sorted);
            }
            if (key === 'authors') {
                const authors = data.map(item => item.authors[0].name);
                console.log(authors)
                const sorted = sortBy(data, authors);
                return filterData(sorted);
            }

        }

        filterData(data);
    };

    getFirstLetters = () => {
        const {data, hook} = this.props;
        const letters = data.map(book => book.title && book.title[0]).sort();
        hook('letters', [...new Set(letters)]);
    };

    filterByLetter = () => {
        const {letter, data, filterData} = this.props;
        const filteredBooks = data.filter(book => {
            return book.title && book.title[0] === letter;
        });
        const result = letter.length ? filteredBooks : data;

        filterData(result);
    };
    
    render() {
        const { items } = this.props;
        const { loading } = this.state;

        if (loading) return <Loader/>;

        return (
            <div className='container__container-book' itemScope itemType="http://schema.org/ItemList http://schema.org/CreativeWork">
                <div className="list-book"
                     itemProp="itemListElement"
                     itemScope
                     itemType="http://schema.org/ListItem"
                >
                    { items && items.map((book, key) => (
                        <Link to={`/books/${book.id}`}
                              key={key}
                              className="list-book__link"
                              itemprop="url"
                              content={`patina.ru/books/${book.id}`}
                        >
                            <span itemProp="position" content={key}>
                                {`«${book.title}» ${book.authors.map(author => author.name)}`}
                            </span>
                        </Link>
                    ))}
                </div>
                {this.props.pagination || ''}
            </div>
        );
    }
}

export default ListBooks;