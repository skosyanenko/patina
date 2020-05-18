import React, { Component } from 'react';
import Socials from 'components/SocialsGroup';
import Icons from 'components/Icons';
import Author from 'components/Author';

class UserInfo extends Component {
    render() {
        const { user, date, textLength, likes, idContent, typeContent, toggleModal } = this.props;

        return (
            <div className="user-info">
                <div className="user-info__wrapper">
                    <Author date={date}
                            isTimeToRead={true}
                            textLength={textLength}
                            user={user}
                    />
                    <div className="follow-button">Подписаться</div>
                </div>
                <Socials toggleModal={toggleModal}/>
                <Icons
                    likes={likes}
                    idContent={idContent}
                    typeContent={typeContent}
                    toggleModal={toggleModal}
                />
            </div>
        );
    }
}

export default UserInfo;