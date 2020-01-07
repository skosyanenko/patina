import React from 'react';
import Modal from 'react-modal';
import './index.sass';

const ModalEntrance = ({isOpen, toggleModal}) => (
   <Modal className="modal" isOpen={isOpen}>
        <div className="modal__circle"/>
        <div className="modal__content">
            <div className="modal__content-user"/>
            <div
                className="modal__content-close"
                onClick={() => toggleModal(false)}
            />
            <div className="registration__group">
                <img src="images/icons/user/email.svg" alt="" className="registration__column-img"/>
                <input type="text" required/>
                <span className="registration__group-highlight"/>
                <span className="registration__group-bar"/>
                <label>E-mail</label>
            </div>
            <div className="registration__group">
                <img src="images/icons/user/password.svg" alt="" className="registration__column-img"/>
                <input type="text" required/>
                <span className="registration__group-highlight"/>
                <span className="registration__group-bar"/>
                <label>Пароль</label>
            </div>
            <div className="button buttonGreen">Войти</div>
        </div>
   </Modal>
);

export default ModalEntrance;