import React, {Component} from 'react';
import BookText from '../components/PageBook/BookText';
import BookImg from '../components/PageBook/BookImg';
import ModalFilms from '../components/ModalFilms';

class BookPage extends Component {
    state = {
        modalIsOpen: false
    };

    toggleModal = bool => this.setState({modalIsOpen: bool});

    render() {
        const {modalIsOpen} = this.state;
        return (
            <div className={`${modalIsOpen && 'blur'}`}>
                <div className="content">
                    <BookImg/>
                    <BookText toggleModal={this.toggleModal}/>
                </div>
                <ModalFilms
                    isOpen={modalIsOpen}
                    toggleModal={this.toggleModal}
                />
            </div>
        );
    }
}

BookPage.propTypes = {};

export default BookPage;

