import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.sass';

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
        const {toggleModal} = this.props;
        const {isEntered} = this.state;

        return (
            <div className="entrance">
                {isEntered
                    ?
                    <div className="entrance__true">
                        <Link to={'/profile/home'}>
                            <div className="entrance__true-profile"/>
                        </Link>
                        <Link to={'/profile/statistic'} className="entrance__true-wrap">
                            <div className="entrance__true-bell"/>
                            <span className="entrance__true-counter">1</span>
                        </Link>
                        <div className="entrance__true-exit"
                             onClick={this.exitProfile}
                        />
                    </div>
                    :
                    <div className="entrance__false">
                        <Link to={'/form/registration'}>
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
