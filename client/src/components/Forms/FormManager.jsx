import React, {Component} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import HookForm from './HookForm';

class FormManager extends Component {
    state = {
        success: false
    };

    static defaultProps = {
        button: 'Добавить',
        classNamePrefix: '',
        classNamePref: ''
    };

    onSubmit = values => {
        console.log(values);
        axios.post(`/api/${this.props.API}`, values)
            .then(res => {
                console.log('Submit Response: ', res.data);
                this.setState({success: true});
            })
            .catch(err => {
                console.log('Ошибка при отправке формы, попробуйте позже!' + err)
            });
    };

    render() {
        const {success} = this.state;

        return (
            <div className="page--form">
                <div className="form__title">
                    {this.props.title}
                </div>

                <HookForm
                  {...this.props}
                  onSubmit={this.onSubmit}
                />

                {success &&
                    <div className="form__success">
                        Заявка успешно отправлена!
                    </div>
                }
            </div>
        );
    }
};

FormManager.propTypes = {
    fields:          PropTypes.array,
    API:             PropTypes.string,
    title:           PropTypes.string,
    button:          PropTypes.string,
    classNamePrefix: PropTypes.string,
    classNamePref:   PropTypes.string,
    updateState:     PropTypes.bool,
    isSave:          PropTypes.bool
};

export default FormManager;