import React, { Component } from 'react';
import FormManager from 'components/Forms/FormManager';
import MyHead from 'components/MyHead';
import fields from 'components/Forms/Fields/registration.json'
import Auth from 'services/Authorization';

class RegistrationForm extends Component {
    state = {
        isEntered: false
    };

    componentDidMount() {
        if ( Auth.token && Auth.token.length > 0) {
            this.setState({isEntered: true})
        } else {
            this.setState({isEntered: false})
        }
    };

    exitProfile = () => {
        this.setState({
            isEntered: false
        }, () => Auth.exitProfile());
    };

    render () {
        const { isEntered } = this.state;

        return (
            <>
                <MyHead
                    title={'Регистрация - Patina'}
                    description={'Создайте личный профиль для публикации Ваших рецензий и отслеживания, заинтересовавших Вас пользователей'}
                    link={'/registration'}
                    robots={'all'}
                />
                {isEntered ?
                    <div className="add-review">
                        <span className="add-review__title">
                            Вы уже зарегистрированы!
                        </span>
                        <div
                            className="button button-green"
                            onClick={this.exitProfile}
                        >
                            Выйти
                        </div>
                    </div>
                    :
                    <FormManager
                        fields={fields}
                        title={'Регистрация'}
                        button={'Зарегистрироваться'}
                        classPrefix={'btn-registration'}
                        api={'auth/local/register'}
                    />
                }
            </>
        );
    }
}

export default RegistrationForm;
