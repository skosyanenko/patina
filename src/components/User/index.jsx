import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.sass';

class User extends Component {
    render() {
        const {isTimeToRead, isButton, buttonText, isTime, toggleModal} = this.props;
        return (
            <div className="us">
                <div className="us__wrapper">
                    <div className="us__avatar">
                        <img src="" alt="" className="us__avatar-img"/>
                        <div className="us__avatar-name">ТМ</div>
                    </div>
                    <div className="us__inform">
                        <div className="us__inform-name">Тетя Мотя</div>
                        {isTime &&
                            <div className="us__inform-date">
                                01.11.19
                            </div>
                        }
                        {isTimeToRead && <div className="us__inform-time">12 мин. читать</div>}
                        {isButton && <div className="follow-button button-white" onClick={() => toggleModal(true)}>{buttonText}</div>}
                    </div>
                </div>
            </div>
        );
    }
}

User.propTypes = {
    isTimeToRead: PropTypes.bool.isRequired,
    isButton:     PropTypes.bool.isRequired,
    isTime:       PropTypes.bool.isRequired,
    buttonText:   PropTypes.string.isRequired
};

export default User;