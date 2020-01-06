import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.sass';
import data from 'startData/listBook';

class ListBook extends Component {
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
                this.props.books.filter(book => book.title[0].toLowerCase() === this.props.activeLetter) :
                this.props.books;

            this.setState({filteredBooks});
        }
    }

    getBooks = () => {
        this.setState({
            filteredBooks: data.items
        });
    };

    render() {
        const {filteredBooks} = this.state;

        return (
            <div className="listBook">
                {filteredBooks && filteredBooks.map((item, key) => (
                    <Link to={'/book'}
                          key={key}
                          className="listBook__link"
                    >
                        {`«${item.title}» ${item.author}`}
                    </Link>
                ))}
            </div>
        );
    }
}

ListBook.propTypes = {};

export default ListBook;