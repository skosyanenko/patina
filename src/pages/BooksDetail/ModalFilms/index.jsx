import React, {Component} from 'react';
import Modal from 'react-modal';
import Slider from 'react-slick';
import {Transition} from 'react-transition-group';
import './index.sass';

class ModalFilms extends Component {

    render() {
        const {isOpen, toggleModal} = this.props;
        const {films} = this.props;

        return (
            <Transition in={isOpen} timeout={50}>
                {state =>
                    <Modal className={`films ` + state}
                           isOpen={isOpen}
                           closeTimeoutMS={1000}
                    >
                        <Slider
                            ref={c => (this.slider = c)}
                            dots={true}
                            speed={500}
                            infinite={true}
                            slidesToShow={1}
                            slidesToScroll={1}
                        >
                            {films && films.map((film, key) => (
                                <div className="films__wrapper" key={key}>
                                    <h1 className="films__title">{film.title}</h1>
                                    <img src={film.image} alt="" className="films__img"/>
                                    <div className="films__wrap">
                                        <div className="films__wrap-description">{film.description}</div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                        <div className="films__close">
                            <div className="films__close-icon"
                                 onClick={() => toggleModal(false)}
                            />
                        </div>
                    </Modal>
                }
            </Transition>
        );
    }
}

export default ModalFilms;