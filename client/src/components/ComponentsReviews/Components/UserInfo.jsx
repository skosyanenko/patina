import React, { Component } from 'react';
import Socials from 'components/SocialsGroup';
import Icons from 'components/Icons';
import Author from 'components/Author';

class UserInfo extends Component {
    render() {
        const { date, textLength, like, toggleModal } = this.props;

        return (
            <div className="user-info">
                <div className="user-info__wrapper">
                    <Author date={date}
                            isTimeToRead={true}
                            textLength={textLength}
                    />
                    <div className="follow-button">Подписаться</div>
                </div>
                <Socials toggleModal={toggleModal}/>
                <Icons like={like} toggleModal={toggleModal}/>
            </div>
        );
    }
}

export default UserInfo;