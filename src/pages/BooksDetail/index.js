import React, {Component} from 'react';
import Description from './Description';
import Cover from './Cover';
import ModalFilms from './ModalFilms';
import CommentBlock from 'components/CommentBlock';
import axios from 'axios';

class BookPage extends Component {
    state = {
        modalIsOpen: false,
        currentBook: {}
    };

    toggleModal = bool => this.setState({modalIsOpen: bool});

    fetchCurrentBook = async () => {
        const { id } = this.props.match.params;

        return await axios.get(`/api/v1/books/${id}`)
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
        this.fetchCurrentBook().then(res => {
            this.setState({currentBook: res})
        });
    }

    render() {
        const {modalIsOpen, currentBook} = this.state;

        return (
            <div className={`${modalIsOpen && 'blur'}`}>

                <div className="container container--book-detail">

                    <Cover
                        author={currentBook.author}
                        image={currentBook.bookImage}
                        categories={currentBook.categories}
                    />

                    <Description toggleModal={this.toggleModal}
                                 currentBook={currentBook}
                    />
                </div>
                <CommentBlock bookId={currentBook.id}/>

                <ModalFilms
                    isOpen={modalIsOpen}
                    toggleModal={this.toggleModal}
                    films={currentBook.films}
                />

            </div>
        );
    }
}

export default BookPage;

