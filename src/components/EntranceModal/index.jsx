import React from 'react';
import Modal from 'react-modal';
import { Transition } from 'react-transition-group';
import { useForm } from 'react-hook-form';
import InputText from '../Forms/Input';
import entry from '../Forms/Fields/entry';
import './index.sass';

const EntranceModal = ({ isOpen, toggleModal }) => {
    const { handleSubmit, register, errors } = useForm();

    const onSubmit = values => {
        console.log(values);
    };

    return (
        <Transition in={isOpen} timeout={50}>
            { state =>
                <Modal className={`modal `  + state}
                    isOpen={isOpen}
                    ariaHideApp={false}
                    closeTimeoutMS={1000}
                >
                    <form className="modal__wrapper" onSubmit={handleSubmit(onSubmit)}>
                        <div className="modal__circle">
                            <div className="modal__circle-user"/>
                        </div>
                        <div className="modal__wrapper-close"
                            onClick={() => toggleModal(false)}
                        />
                        { entry.map((field, key) => (
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
            }
        </Transition>
    )
};

export default EntranceModal;