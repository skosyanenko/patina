import React, {Component} from 'react';
import Description from './Description';
import Cover from './Cover';
import ModalFilms from './ModalFilms';

class BookPage extends Component {
    state = {
        modalIsOpen: false
    };

    toggleModal = bool => this.setState({modalIsOpen: bool});

    render() {
        const {modalIsOpen} = this.state;

        return (
            <div className={`${modalIsOpen && 'blur'}`}>

                <div className="container container--book-detail">

                    <Cover/>

                    <Description toggleModal={this.toggleModal}/>
                </div>

                <ModalFilms
                    isOpen={modalIsOpen}
                    toggleModal={this.toggleModal}
                />

            </div>
        );
    }
}

export default BookPage;

