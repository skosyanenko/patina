import React, { Component } from 'react';
import Socials from 'components/SocialsGroup';
import Icons from 'components/Icons';
import Author from 'components/Author';

class UserInfo extends Component {
    render() {
        const { date } = this.props;

        return (
            <div className="user-info">
                <div className="user-info__wrapper">
                    <Author date={date}
                            isTimeToRead={true}
                            textLength={this.props.textLength}
                    />
                    <div className="follow-button">Подписаться</div>
                </div>
                <Socials/>
                <Icons/>
            </div>
        );
    }
}

export default UserInfo;