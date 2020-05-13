import React, { Component } from 'react';
import Publish from 'components/ComponentsProfile/Publish';
import BookMarks from 'components/ComponentsProfile/BookMarks';
import Auth from 'services/Authorization';

class ProfileHome extends Component {
    state = {
        isEntered: false
    };

    componentDidMount() {
        if ( Auth.token && Auth.token.length > 0) {
            this.setState({isEntered: true})
        } else {
            this.setState({isEntered: false})
        }
    };

    render() {
        const { isEntered } = this.state;
        const { user, toggleModal } = this.props;

        return (
            <div className="page--profile">
                <div className={isEntered ? 'page--profile-block' : 'page--profile-public'}>
                    <div className="page--profile-title">Последние публикации:</div>
                    <div className="page--profile-wrap">
                        { user.reviews && user.reviews.map((item, key) => (
                            <Publish
                                item={item}
                                user={user}
                                key={key}
                                toggleModal={toggleModal}
                            />
                        ))}
                    </div>
                </div>
                { isEntered
                    ?
                    <div className="page--profile-block">
                        <div className="page--profile-title">Закладки:</div>
                        <BookMarks />
                        <BookMarks />
                        <BookMarks />
                        <BookMarks />
                    </div>
                    :
                    ''
                }
            </div>
        );
    }
}

export default ProfileHome;