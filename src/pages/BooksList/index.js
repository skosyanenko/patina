import React, {Component, Fragment} from 'react';
import axios from 'axios';
import paginationWrap from 'components/withPagination/paginationWrap';
import TitleOfPage from 'components/TitleOfPage';
import AlphabetFilter from './AlphabetFilter';
import ListBooks from './ListBooks';
import InputSearch from 'components/InputSearch';
import Sorting from 'components/Sorting';

const BooksWithPagination = paginationWrap(ListBooks);

class BooksPage extends Component {
    state = {
        activeLetter: '',
        sortingBooks: [],
        books: []
    };

    fetchAllBooks = async () => {
        return await axios.get('/api/v1/books')
            .then(res => {
                if (res.data) {
                    return res.data;
                }
            })
            .catch(err => {
                console.log('Ошибка получения элементов из бд' + err)
            });
    };

    componentDidMount() {
        this.fetchAllBooks().then(res => {
            this.setState({books: res})
        });
    }

    hookLetter = activeLetter => this.setState({activeLetter});

    hookSortingBooks = sortingBooks => this.setState({sortingBooks});

    render() {
        return (
            <Fragment>
                <div className="books-title">
                    <TitleOfPage
                        title={"Книги"}
                        subtitle={"книжная полка"}
                    />
                    <Sorting books={this.state.books}/>
                </div>

                <div className='container'>
                    <div className="container__container-book">
                        <InputSearch classNamePrefix=" "/>
                        <Sorting books={this.state.books}
                                 //hookSortingBooks={this.hookSortingBooks()}
                        />
                        <AlphabetFilter hookLetter={this.hookLetter}
                                        books={this.state.books}
                        />
                    </div>
                    <div className='container__container-book'>
                        <BooksWithPagination
                            activeLetter={this.state.activeLetter}
                            sortingBooks={this.state.sortingBooks}
                            books={this.state.books}
                        />
                        {/*<Pagination/>*/}
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default BooksPage;
