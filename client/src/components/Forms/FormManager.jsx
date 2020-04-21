import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import axios from 'axios';
import HookForm from './HookForm';

class FormManager extends Component {
    state = {
        success: false
    };

    static defaultProps = {
        button: 'Добавить',
        prefix: 'form',
        classPrefix: ''
    };

    onSubmit = values => {
	    const formData = new FormData();
	    const { fields } = this.props;
	    
	    Object.keys(values).map(key => {
		    const currentType = fields.find(field => field.name === key).type;

		    switch( currentType ) {
			    case 'file':
                    return formData.append(key, values[key][0]);
                case 'select':
                case 'editor':
                    return formData.set(key, JSON.stringify(values[key]));
                case 'time':
                    return formData.set(key,  Date(values[key]).toString());
			    default:
				    return formData.set(key, values[key]);
		    }
        });
        this.postToDB(formData);
    };

    postToDB = data => {
	    axios.post(`/api/v1/${this.props.API}`, data, {
	    	headers: { 'Content-Type': 'multipart/form-data' }
	    })
		    .then(res => {
			    res.status === 200 &&
			    this.setState({success: true});
		    })
		    .catch(err => {
			    console.log('Ошибка при отправке формы, попробуйте позже!' + err)
		    });
    };

    render() {
        const { success } = this.state;

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
            </div>
        );
    }
}

FormManager.propTypes = {
    fields:          PropTypes.array,
    API:             PropTypes.string,
    title:           PropTypes.string,
    button:          PropTypes.string,
    prefix:          PropTypes.string,
    classPrefix:     PropTypes.string,
    updateState:     PropTypes.bool,
    isSave:          PropTypes.bool
};

export default FormManager;
