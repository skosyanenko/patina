import React from 'react';
import Modal from 'react-modal';
import { Transition } from 'react-transition-group';

Modal.setAppElement('#app');

const ModalError = ({ isOpen, toggleModal }) => (
    <Transition in={isOpen} timeout={50}>
        { state =>
            <Modal className={`modal `  + state}
                isOpen={isOpen}
                ariaHideApp={false}
                closeTimeoutMS={1000}
            >
                <div className="modal__wrapper">
                    <div className="modal__circle">
                        <div className="modal__circle-errors"/>
                    </div>
                    <div className="modal__close"
                        onClick={() => toggleModal(false)}
                    />
                    <div className="modal__error">
                        <span className="modal__error-title">Упс, ошибка</span>
                        <span className="modal__error-text">
                            К сожалению, пользователь с таким логином или E-mail уже существует.
                            Пожалуйста, придумайте другой логин или укажите другой E-mail.
                        </span>
                    </div>
                    <div className="button button-green" onClick={() => toggleModal(false)}>
                        Ок
                    </div>
                </div>
            </Modal>
        }
    </Transition>
);


export default ModalError;