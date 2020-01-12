import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.sass';

class AuthorOfPublish extends Component {
    render() {
        const {isTimeToRead, isButton} = this.props;
        return (
            <div className="author-publish">
                <div className="author-publish__wrapper">
                    <div className="author-publish__avatar">
                        <img src="" alt="" className="author-publish__avatar-img"/>
                        <div className="author-publish__avatar-name">ТМ</div>
                    </div>
                    <div className="author-publish__inform">
                        <div className="author-publish__inform-name">Тетя Мотя</div>
                        <div className="author-publish__inform-date">01.11.19</div>
                        { isTimeToRead ? <div className="author-publish__inform-time">12 мин. читать</div> : '' }
                    </div>
                </div>
                { isButton ? <div className="follow-button buttonWhite">Подписаться</div> : '' }
            </div>
        );
    }
}

AuthorOfPublish.propTypes = {
    isTimeToRead: PropTypes.bool.isRequired,
    isButton: PropTypes.bool.isRequired
};

export default AuthorOfPublish;