import React, { Component } from 'react';
import Socials from 'components/SocialsGroup';
import Icons from 'components/Icons';
import Author from 'components/Author';
import Auth from 'services/Authorization';

const { API_URL } = process.env;

class UserInfo extends Component {
    state = {
        isFollow: false
    };

    handleClick = () => {
        const { toggleModal } = this.props;
        const { isFollow } = this.state;

        const userId = Auth.userInfo.id;

        if (!Auth.isAuth) return toggleModal();
    };

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
                    <div className="follow-button" onClick={this.handleClick}>Подписаться</div>
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