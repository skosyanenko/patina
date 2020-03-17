import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.sass';
import sortBy from 'lodash.sortby';
import {sortParams} from 'config/config';

class ListBooks extends Component {
    state = {
        loading: true,
        perPage: 9,
        valuesDropdown: [9, 18, 27]
    };

    componentDidMount() {
        this.props.updateState(this.state.perPage, this.state.valuesDropdown);
        this.props.fetchData('/api/v1/books')
            .then(() => this.setState({loading: false}))
            .catch(err => console.log(err));
    }

    componentDidUpdate(prevProps) {     
        const {letter, data, sorting} = this.props;

        if (prevProps.letter !== letter) {
            this.filterByLetter();
        }

        if (prevProps.data !== data) {
            this.getFirstLetters();
        }

        if (prevProps.sorting !== sorting) {            
            this.sort();
        }
    }

    sort = () => {
        const {sorting, data, filterData} = this.props;
        if (sorting) {
            const {key} = sortParams.find(item => item.title === sorting);
            const sorted = sortBy(data, [key]);    
            return filterData(sorted);
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
        const {items} = this.props;
        const {loading} = this.state;

        if (loading) return 'Loading...';

        return (
            <div className='container__container-book'>
                <div className="list-book">
                    {items && items.map((book, key) => (
                        <Link to={`/books/${book.id}`}
                              key={key}
                              className="list-book__link"
                        >
                            {`«${book.title}» ${book.author}`}
                        </Link>
                    ))}
                </div>

                {this.props.pagination || ''}

            </div>
        );
    }
}

export default ListBooks;