import React, {Component} from 'react';
import './index.sass';

class Sorting extends Component {
    state = {
        params: [
            {value: 1, label: 'названию'},
            {value: 2, label: 'автору'},
            {value: 3, label: 'рейтингу'},
        ],
        books: this.props.books,
        sortingBooks: []
    };

    handleSort = value => {
        this.setState(state => ({
            params: state.params.map(x => {
                x.active = x.value === value;
                this.sortBooks(value);
                return x;
            })
        }));
    };

    sortBooks = (value) => {
        let sortingBooks = [];
        switch (value) {
            case 1:
                sortingBooks = this.state.books.filter(book => book.title.sort());
                this.setState({sortingBooks});
            case 2:
                sortingBooks = this.state.books.filter(book => book.author.sort());
                this.setState({sortingBooks});
            case 3:
                sortingBooks = this.state.books.filter(book => book.rating.sort((a, b) => {return a -b}));
                this.setState({sortingBooks});
            default:
                sortingBooks = this.state.books.filter(book => book.title.sort());
                this.setState({sortingBooks});
        }
    };

    render() {

        return (
            <div className="sorting">
                <span className="sorting__title">
                    Cортировать по:
                </span>
                <div className="sorting__wrapper">
                    {this.state.params.map((param, key) => (
                        <span
                            key={key}
                            className={`sorting__wrapper-type ${param.active && 'active'}`}
                            onClick={() => this.handleSort(param.value)}
                        >
                            {param.label}
                        </span>
                    ))}
                </div>
            </div>
        )
    }
}

export default Sorting;
