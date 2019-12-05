import React, {Component} from 'react';
import Layout from '../components/Layouts/Layout';
import Pagination from '../components/Pagination';
import SectionTop from '../components/SectionTop';
import AlphabetFilter from '../components/Alphabet';
import ListBook from '../components/ListBook';
import data from 'startData/listBook';

class BooksPage extends Component {
    state = {
        activeLetter: '',
        books: []
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
            <Layout books={this.state.books} >
                <SectionTop
                    title={"Книги"}
                    subtitle={"книжная полка"}
                    isSorting={true}
                />
                <div className='content'>
                    <AlphabetFilter hookLetter={this.hookLetter}/>
                    <ListBook activeLetter={this.state.activeLetter}
                              books={this.state.books}
                    />
                </div>
                <Pagination/>
            </Layout>
        );
    }
}

BooksPage.propTypes = {};

export default BooksPage;
