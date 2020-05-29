import React from 'react';
import Link from 'next/link';
import Modal from 'react-modal';
import { Transition } from 'react-transition-group';

const UnknownModal = ({ isOpen, toggleModal }) => {
    Modal.setAppElement('#app');

    return (
      <Transition in={isOpen} timeout={50}>
          { state =>
            <Modal
              className={`modal `  + state}
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
                            К сожалению, незарегистрированные пользователи не могут выполнять это действие. Войдите или зарегистрируйтесь.
                        </span>
                    </div>
                    <Link href={'/registration'}>
                        <div
                          className="button button-green"
                          onClick={() => toggleModal(false)}
                        >
                            Зарегистрироваться
                        </div>
                    </Link>
                </div>
            </Modal>
          }
      </Transition>
    )
};

export default UnknownModal;