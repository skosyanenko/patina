import React, {Component} from 'react';
import paginationWrap from '../components/HOC';
import SectionTop from '../components/SectionTop';
import AlphabetFilter from '../components/PageBooks/Alphabet';
import ListBook from '../components/PageBooks/ListBook';
import Search from '../components/Search';
import data from 'startData/listBook';

const BooksWithPagination = paginationWrap(ListBook);

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
                <SectionTop
                    title={"Книги"}
                    subtitle={"книжная полка"}
                    isSorting={true}
                />
                <div className='content'>
                    <div className="content__containerBook">
                        <Search
                            classNamePrefix=" "
                        />
                        <AlphabetFilter hookLetter={this.hookLetter}/>
                    </div>
                    <div className='content__containerBook'>
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

BooksPage.propTypes = {};

export default BooksPage;
