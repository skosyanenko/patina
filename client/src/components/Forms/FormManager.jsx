import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import axios from 'axios';
import HookForm from './HookForm';
import ModalError from './ModalError';

class FormManager extends Component {
    state = {
        success: false,
        modalIsOpen: false,
        error: ''
    };

    onSubmit = values => {
	    const { fields } = this.props;
	    const { avatar } = this.state;

	    Object.keys(values).map(key => {
		    const currentType = fields.find(field => field.name === key).type;

		    switch( currentType ) {
                case 'select':
                    return values.book = (values[key].value);
                case 'editor':
                    return values.description = (values[key]);
                case 'file':
                    return values.avatar = avatar[0].value;
		    }
        });
        this.postToDB(values);
    };

    updateFile = (newState = {}) => {
        this.setState({...newState})
    };

    postToDB = data => {
        const { API_URL } = process.env;

	    axios.post(`${API_URL}/${this.props.api}`, data)
		    .then(res => {
			    res.status === 200 &&
			    this.setState({success: true});
		    })
		    .catch(err => {
                this.setState({
                    error: 'Ошибка при отправке формы, попробуйте позже!' + err,
                    modalIsOpen: true
                });
		    });
    };

    toggleModal = () => this.setState(prevState => ({modalIsOpen: !prevState.modalIsOpen}));

    render() {
        const { success, modalIsOpen } = this.state;

        return (
            <div className="page--form">
                <div className="form__title">
                    { this.props.title }
                </div>

                <Transition in={success} timeout={50}>
                    {state =>
                        <HookForm
                            {...this.props}
                            onSubmit={this.onSubmit}
                            classAnimate={state}
                            updateFile={this.updateFile}
                        />
                    }
                </Transition>

                <Transition in={success} timeout={50}>
                    { state =>
                        <div className={`form__success ` + state}>
                            Форма успешно отправлена!
                        </div>
                    }
                </Transition>

                <ModalError
                    isOpen={modalIsOpen}
                    toggleModal={this.toggleModal}
                />
            </div>
        );
    }
}

FormManager.propTypes = {
    fields:          PropTypes.array,
    title:           PropTypes.string,
    button:          PropTypes.string,
    classPrefix:     PropTypes.string
};

export default FormManager;
