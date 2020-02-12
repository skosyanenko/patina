import React, {Component} from 'react';
import paginationWrap from 'components/withPagination/paginationWrap';
import TitleOfPage from 'components/TitleOfPage';
import AlphabetFilter from './AlphabetFilter';
import ListBooks from './ListBooks';
import InputSearch from 'components/InputSearch';
import Sorting from 'components/Sorting';
import data from 'startData/listBook';

const BooksWithPagination = paginationWrap(ListBooks);

class BooksPage extends Component {
    state = {
        activeLetter: '',
        books: [],
        pageOfBooks: []
    };

    componentDidMount() {
        this.getBooks();
    }

    getBooks = () => {
        this.setState({
            books: data.items
        });
    };

    hookLetter = activeLetter => this.setState({activeLetter});

    render() {
        return (
            <>
                <TitleOfPage
                    title={"Книги"}
                    subtitle={"книжная полка"}
                    isSorting={true}
                />
                <div className='container'>
                    <div className="container__container-book">
                        <InputSearch
                            classNamePrefix=" "
                        />
                        <Sorting/>
                        <AlphabetFilter hookLetter={this.hookLetter}/>
                    </div>
                    <div className='container__container-book'>
                        <BooksWithPagination
                            activeLetter={this.state.activeLetter}
                            books={this.state.books}
                        />
                        {/*<Pagination/>*/}
                    </div>
                </div>
            </>
        );
    }
}

export default BooksPage;
