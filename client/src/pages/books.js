import React, {Component} from 'react';
import Layout from '../components/Layouts/Layout';
import Pagination from '../components/Pagination';
import SectionTop from '../components/SectionTop';
import AlphabetFilter from '../components/Alphabet';
import ListBook from '../components/ListBook';
import Search from '../components/Search';
import data from 'startData/listBook';
import PropTypes from "prop-types";


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
            <Layout books={this.state.books}
                    status={this.props.status}
            >
                <SectionTop
                    title={"Книги"}
                    subtitle={"книжная полка"}
                    isSorting={true}
                />
                <div className='content'>
                    <div className="content__containerBook">
                        <Search/>
                        <AlphabetFilter hookLetter={this.hookLetter}/>
                    </div>
                    <div className='content__containerBook'>
                        <ListBook activeLetter={this.state.activeLetter}
                                  books={this.state.books}
                        />
                        <Pagination/>
                    </div>
                </div>

            </Layout>
        );
    }
}

BooksPage.propTypes = {};

export default BooksPage;
