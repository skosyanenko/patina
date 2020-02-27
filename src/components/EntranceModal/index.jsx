import React from 'react';
import Modal from 'react-modal';
import {useForm} from 'react-hook-form';
import InputText from '../Forms/Input';
import entry from '../Forms/Fields/entry';
import './index.sass';

const EntranceModal = ({isOpen, toggleModal}) => {
    const {handleSubmit, register, errors} = useForm();

    const onSubmit = values => {
        console.log(values);
    };

    return (
        <Modal className="modal" isOpen={isOpen} ariaHideApp={false}>
            <form className="modal__wrapper" onSubmit={handleSubmit(onSubmit)}>
                <div className="modal__circle">
                    <div className="modal__circle-user"/>
                </div>
                <div className="modal__wrapper-close"
                     onClick={() => toggleModal(false)}
                />
                {entry.map((field, key) => (
                    <InputText
                        key={key}
                        {...field}
                        register={register}
                        errors={errors}
                    />
                ))}
                <button type="submit" className="button button-green">
                    Войти
                </button>
            </form>
        </Modal>
    )
};

export default EntranceModal;