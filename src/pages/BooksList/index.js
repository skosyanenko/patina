import React, {Component, Fragment} from 'react';
import paginationWrap from 'components/withPagination/paginationWrap';
import TitleOfPage from 'components/TitleOfPage';
import AlphabetFilter from './AlphabetFilter';
import ListBooks from './ListBooks';
import InputSearch from 'components/InputSearch';
import Sorting from 'components/Sorting';

const BooksWithPagination = paginationWrap(ListBooks);

class BooksPage extends Component {
    state = {
        letter: '',
        sorting: '',
        books: [],
        letters: []
    };

    hookState = (name, value) => this.setState({[name]: value});

    render() {
        const {letter, sorting, letters} = this.state;
        return (
            <Fragment>
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
            </Fragment>
        );
    }
}

export default BooksPage;
