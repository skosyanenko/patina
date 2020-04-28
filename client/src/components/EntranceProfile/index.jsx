import React, { Component } from 'react';
import Link from 'next/link';
import Auth from 'services/Authorization';

class EntranceProfile extends Component {
    exitProfile = () => {
        let currToken = Auth.token;
        let currInfo = Auth.userInfo;
        Auth.setAuth(false, {token: currToken, userInfo: currInfo});
    };

    render() {
        const { toggleModal } = this.props;

        return (
            <div className="entrance">
                {Auth.isAuth === true ?
                    <div className="entrance__wrapper">
                        <Link href={`/profile/${Auth.userInfo.id}`}>
                            <a className="entrance__wrapper-profile"/>
                        </Link>
                        <Link href={'/profile/statistic'}>
                            <a className="entrance__wrapper-wrap">
                                <div className="entrance__wrapper-bell"/>
                                <span className="entrance__wrapper-counter">1</span>
                            </a>
                        </Link>
                        <div className="entrance__wrapper-exit"
                             onClick={this.exitProfile}
                        />
                    </div>
                    :
                    <div className="entrance__wrapper">
                        <div className="entrance__exit-column">
                            <Link href={'/registration'}>
                                <div className="button follow-button button-white">Создать профиль</div>
                            </Link>
                            <div className="button follow-button button-white"
                                 onClick={() => toggleModal(true)}
                            >
                                Войти в профиль
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default EntranceProfile;
