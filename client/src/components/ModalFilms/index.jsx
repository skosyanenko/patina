import React, { Component } from 'react';
import { Transition } from 'react-transition-group';
import Modal from 'react-modal';
import Slider from 'react-slick';
import ReactMarkdown from 'react-markdown';

class ModalFilms extends Component {
    render() {
        const { isOpen, toggleModal } = this.props;
        const { films } = this.props;

        Modal.setAppElement('#app');

        return (
            <Transition in={isOpen} timeout={50}>
                {state =>
                    <Modal className={`films ` + state}
                           isOpen={isOpen}
                           closeTimeoutMS={1000}
                    >
                        <Slider
                            dots={true}
                            speed={500}
                            infinite={true}
                            slidesToShow={1}
                            slidesToScroll={1}
                        >
                            { films && films.map(({ title, image, description }, key) => (
                                <div className="films__wrapper"
                                     key={key}
                                     itemType="http://schema.org/Movie"
                                     itemScope
                                >
                                    <h1 className="films__title" itemProp="name">
                                        {title}
                                    </h1>
                                    {image && <img src={`${image.url}`} alt="" className="films__img" itemProp="image"/>}
                                    <div className="films__wrap">
                                        <ReactMarkdown
                                            source={description}
                                            className="films__wrap-description"
                                            itemProp="description"
                                        />
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