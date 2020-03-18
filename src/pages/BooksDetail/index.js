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

    componentDidMount() {
        this.fetchCurrentBook();
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.fetchCurrentBook();
        }
    }

    fetchCurrentBook = async () => {
        const { id } = this.props.match.params;

        return await axios.get(`/api/v1/books/${id}`)
            .then(res => {
                if (res.data) {
                    this.setState({currentBook: res.data})
                }
            })
            .catch(err => {
                console.log('Ошибка получения элементов из бд' + err)
            });
    };

    toggleModal = bool => this.setState({modalIsOpen: bool});

    render() {
        const {modalIsOpen, currentBook} = this.state;

        return (
            <div className={`${modalIsOpen && 'blur'}`}>

                <div className="container container--book-detail">

                    <Cover {...currentBook} />

                    <Description  {...currentBook} toggleModal={this.toggleModal} />
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

