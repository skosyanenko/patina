import React, { Component } from 'react';
import paginationWrap from 'components/withPagination/paginationWrap';
import TitleOfPage from 'components/TitleOfPage';
import InputSearch from 'components/InputSearch';
import Sorting from 'components/Sorting';
import AlphabetFilter from './Components/AlphabetFilter';
import ListBooks from './Components/ListBooks';
import './index.sass';

const BooksWithPagination = paginationWrap(ListBooks);

class BooksList extends Component {
    state = {
        letter: '',
        sorting: '',
        books: [],
        letters: []
    };

    hookState = (name, value) => this.setState({[name]: value});

    render() {
        const { letter, sorting, letters } = this.state;

        return (
            <>
                <div className="books-title">
                    <TitleOfPage
                        title={"Книги"}
                        subtitle={"книжная полка"}
                    />
                    <Sorting hook={this.hookState}/>
                </div>

                <div className='container'>
                    <div className="container__container-book">
                        <InputSearch
                        />

                        <Sorting hook={this.hookState}/>

                        <AlphabetFilter 
                            hook={this.hookState} 
                            letters={letters}
                        />
                    </div>
                
                    <BooksWithPagination
                        letter={letter}
                        sorting={sorting}
                        hook={this.hookState}
                    />
                    
                </div>
            </>
        );
    }
}

export default BooksList;
