import React, { useState } from 'react';
import Router from 'next/router';
import Modal from 'react-modal';
import axios from 'axios';
import Auth from 'services/Authorization';
import { Transition } from 'react-transition-group';
import { useForm } from 'react-hook-form';
import InputText from 'components/Forms/Input';
import entry from 'components/Forms/Fields/entry.json';

const EntranceModal = ({ isOpen, toggleModal }) => {
    const { handleSubmit, register, errors } = useForm();

    const initialState = {
        error: '',
        success: false
    };

    const [state, setState] = useState(initialState);

    const { error, success } = state;

    const onSubmit = values => {
        userLogin(values);
    };

    const userLogin = values => {
        const { API_URL } = process.env;

        axios.post(`${API_URL}/auth/local`, {
            identifier: values.email,
            password: values.password,
        })
        .then(res => {
            if (res.status === 200) {
                setState({error: '', success: true});

                Auth.setAuth({token: res.data.jwt, userInfo: res.data.user});
                Router.push(`/profile/${res.data.user.id}`);
            }

            toggleModal(false);
        })
        .catch(err => {
            setState({...state, error: 'Неверный e-mail или пароль!'});
        });
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
                        <div className="modal__close"
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
                        {error.length > 0 &&
                            <span className="modal__error-text">{error}</span>
                        }
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