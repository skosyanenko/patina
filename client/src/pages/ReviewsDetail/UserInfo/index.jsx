import React, {Component} from 'react';
import Socials from 'components/SocialsGroup';
import Author from '../../Profile/Author';
import './index.sass';

class UserInfo extends Component {
    render() {
        return (
            <div className="user-info">
                <div className="user-info__wrapper">
                    <Author isTimeToRead={12}/>
                    <div className="follow-button">Подписаться</div>
                </div>
                <Socials/>
                <div className="user-info__like">
                    <span className="user-info__like-counter">2</span>
                    <svg className="user-info__like-icon">
                        <use href="/images/icons/sprite.svg#like"/>
                    </svg>
                </div>
            </div>
        );
    }
}

export default UserInfo;