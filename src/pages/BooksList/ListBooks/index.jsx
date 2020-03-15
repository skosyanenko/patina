import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import './index.sass';

class ListBooks extends Component {
    state = {
        filteredBooks: []
    };

    componentDidMount() {
        this.getBooks();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.activeLetter !== this.props.activeLetter) {
            const isLetter = this.props.activeLetter.length > 0;
            const filteredBooks = isLetter ?
                this.props.books.filter(book => {
                    if (book.title) {
                        return book.title[0].toLowerCase() === this.props.activeLetter;
                    }
                }) :
                this.props.books;

            this.setState({filteredBooks});
        }
    }

    getBooks = () => {
        this.setState({
            filteredBooks: this.props.books
        });
    };

    render() {
        const {filteredBooks} = this.state;
        return (
            <Fragment>
                <div className="list-book">
                    {filteredBooks && filteredBooks.map((book, key) => (
                        <Link to={`/books/${book.id}`}
                              key={key}
                              className="list-book__link"
                        >
                            {`«${book.title}» ${book.author}`}
                        </Link>
                    ))}
                </div>

                {/*{books.length && this.props.pagination || ''}*/}

            </Fragment>
        );
    }
}

export default ListBooks;