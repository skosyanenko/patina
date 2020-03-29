import React, {Component} from 'react';
import Socials from 'components/SocialsGroup';
import Author from '../../Profile/Author';
import './index.sass';

class UserInfo extends Component {
    render() {
        const {date} = this.props;
        return (
            <div className="user-info">
                <div className="user-info__wrapper">
                    <Author date={date} isTimeToRead={true} textLength={this.props.textLength}/>
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