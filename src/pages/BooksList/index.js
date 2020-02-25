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

    render() {
        return (
            <Fragment>
                <TitleOfPage
                    title={"Книги"}
                    subtitle={"книжная полка"}
                    isSorting={true}
                />
                <div className='container'>
                    <div className="container__container-book">
                        <InputSearch classNamePrefix=" "/>
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
            </Fragment>
        );
    }
}

export default BooksPage;
