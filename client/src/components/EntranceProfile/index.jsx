import React, { Component } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import Auth from 'services/Authorization';

class EntranceProfile extends Component {
    state = {
        isEntered: false
    };

    componentDidMount() {
        if ( Auth.token && Auth.token.length > 0) {
           this.setState({
               isEntered: true
           })
        } else {
            this.setState({
                isEntered: false
            })
        }
    };

    exitProfile = () => {
        this.setState({
            isEntered: false
        }, () => Auth.exitProfile());
        Router.push(`/`);
    };

    render() {
        const { toggleModal } = this.props;
        const { isEntered } = this.state;

        return (
            <div className="entrance">
                {isEntered ?
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
                    <div className="entrance__column">
                        <div className="entrance__wrapper-profile"
                             onClick={() => toggleModal(true)}
                        />
                        <Link href={'/registration'}>
                            <div className="entrance__column-add"/>
                        </Link>
                    </div>
                }
            </div>
        );
    }
}

export default EntranceProfile;
