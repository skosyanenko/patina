import React, {Component} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {Transition} from 'react-transition-group';
import HookForm from './HookForm';

class FormManager extends Component {
    state = {
        success: false,
        typeView: ''
    };

    hookView = typeView => this.setState({typeView});

    static defaultProps = {
        button: 'Добавить',
        prefix: '',
        classPref: ''
    };

    onSubmit = (values, e) => {
        const formData = new FormData();

        e.preventDefault();

        Object.keys(values).map(key => {
            if (typeof values[key][0] === 'object') return formData.append(key, values[key][0]);
            formData.append(key, values[key]);
        });

        axios.post(`/api/v1/${this.props.API}`, formData, {
            headers: {'content-type': 'multipart/form-data'},
        })
            .then(res => {
                console.log('Submit Response: ', res.data);
                res.status && this.setState({success: true});
            })
            .catch(err => {
                console.log('Ошибка при отправке формы, попробуйте позже!' + err)
            });
    };

    render() {
        const {success, typeView} = this.state;

        return (
            <div className="page--form">
                <div className="form__title">
                    {this.props.title}
                </div>

                <Transition in={success} timeout={50}>
                    {state =>
                        <HookForm
                            {...this.props}
                            onSubmit={this.onSubmit}
                            hookView={this.hookView}
                            typeView={typeView}
                            classAnimate={state}
                        />
                    }
                </Transition>

                <Transition in={success} timeout={50}>
                    {state =>
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