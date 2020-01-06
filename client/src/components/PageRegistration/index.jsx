import React, {Component} from 'react';
import './index.sass';

class RegistrationForm extends Component {

    render() {
        return (
            <div className="registrationForm">
                <div className="registrationForm__column">
                    <div className="registrationForm__column-group">
                        <div className="registrationForm__column-img"/>
                        <input type="text" required/>
                        <span className="registrationForm__column-highlight"/>
                        <span className="registrationForm__column-bar"/>
                        <label>Имя</label>
                    </div>
                    <div className="registrationForm__column-group">
                        <div className="registrationForm__column-img"/>
                        <input type="text" required/>
                        <span className="registrationForm__column-highlight"/>
                        <span className="registrationForm__column-bar"/>
                        <label>E-mail</label>
                    </div>
                    <div className="registrationForm__column-group">
                        <div className="registrationForm__column-img"/>
                        <input type="text" required/>
                        <span className="registrationForm__column-highlight"/>
                        <span className="registrationForm__column-bar"/>
                        <label>Город</label>
                    </div>
                    <div>


                    </div>
                    <div className="registrationForm__column-group">
                        <div className="registrationForm__column-img"/>
                        <input type="text" required/>
                        <span className="registrationForm__column-highlight"/>
                        <span className="registrationForm__column-bar"/>
                        <label>Настроить импорт/ экспорт</label>
                    </div>
                    <div className="registrationForm__column-group">
                        <div className="registrationForm__column-img"/>
                        <input type="text" required/>
                        <span className="registrationForm__column-highlight"/>
                        <span className="registrationForm__column-bar"/>
                        <label>Укажите любимые книги</label>
                    </div>
                    <div className="registrationForm__column-group">
                        <div className="registrationForm__column-img"/>
                        <input type="text" required/>
                        <span className="registrationForm__column-highlight"/>
                        <span className="registrationForm__column-bar"/>
                        <label>Укажите любимых писателей</label>
                    </div>
                </div>
                <div className="registrationForm__column">

                </div>
            </div>
        );
    }
}

RegistrationForm.propTypes = {};

export default RegistrationForm;