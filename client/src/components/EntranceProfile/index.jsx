import React, { Component } from 'react';
import Link from 'next/link';

class EntranceProfile extends Component {
    state = {
        isEntered: true,
    };

    exitProfile = () => {
        this.setState(prevState => ({
            isEntered: !prevState.isEntered
        }))
    };

    render() {
        const { toggleModal } = this.props;
        const { isEntered } = this.state;

        return (
            <div className="entrance">
                { isEntered
                    ?
                    <div className="entrance__true">
                        <Link href={'/profile/home'}>
                            <a className="entrance__true-profile"/>
                        </Link>
                        <Link href={'/profile/statistic'}>
                            <a className="entrance__true-wrap">
                                <div className="entrance__true-bell"/>
                                <span className="entrance__true-counter">1</span>
                            </a>
                        </Link>
                        <div className="entrance__true-exit"
                             onClick={this.exitProfile}
                        />
                    </div>
                    :
                    <div className="entrance__false">
                        <Link href={'/registration'}>
                            <div className="button follow-button button-white">Создать профиль</div>
                        </Link>
                        <div className="button follow-button button-white"
                            onClick={() => toggleModal(true)}
                        >
                            Войти в профиль
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default EntranceProfile;
