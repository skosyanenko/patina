import React, { Component, Fragment } from 'react';
import { withRouter } from "next/router";
import Link from 'next/link';
import { profileLinks, returnNameLetters} from 'config/config';
import Interests from 'components/ComponentsProfile/Interests';
import ProfileHome from 'components/ComponentsProfile/wrapComponents/ProfileHome';
import ProfileFollowing from 'components/ComponentsProfile/wrapComponents/ProfileFollowing';
import ProfileEdit from 'components/ComponentsProfile/wrapComponents/ProfileEdit';
import UpdateStatus from 'components/ComponentsProfile/UpdateStatus';
import MyHead from 'components/MyHead';
import Auth from 'services/Authorization';

class ProfileLayout extends Component {
    state = {
        userLikes: [],
        userStatus: false,
        authorization: false
    };

    componentDidMount() {
        const { router } = this.props;

        if (Auth.userInfo.id === +router.query.id) {
            this.setState({authorization: true})
        }

        this.setState({
            userLikes: this.getItems()
        })
    };

    getItems = () => {
        const  { user: {likeBooks, likeGenres, likeAuthors} } = this.props;
        return  [
            { title: 'Любимые книги', icon: 'books', text: likeBooks },
            { title: 'Любимые жанры', icon: 'wishlist', text: likeGenres },
            { title: 'Любимые авторы', icon: 'author', text: likeAuthors }
        ];
    };

    switchViews = () => {
        const { router, toggleModal, user } = this.props;

        switch(router.pathname) {
            case '/profile-edit/[id]':
                return <ProfileEdit user={user}/>;
            case '/profile-following/[id]':
                return <ProfileFollowing user={user} toggleModal={toggleModal}/>;
            case '/profile/[id]':
                return <ProfileHome user={user} toggleModal={toggleModal}/>;
        }
    };

    updateUserStatus = () => {
        this.setState(prevState => ({userStatus: !prevState.userStatus}))
    };

    updateStatusState = (newState = {}) => {
        this.setState({...newState})
    };

    render () {
        const { userLikes, userStatus, authorization, statusText } = this.state;
        const { router, user } = this.props;

        return (
            <>
                <MyHead
                    title={'Профиль - Patina'}
                    description={'Личный аккаунт пользователя литературного журнала Patina'}
                    link={''}
                    robots={'none'}
                />
                <>
                    <div className={authorization ? 'page--public' : 'page--container'}>
                        { authorization
                            ?
                            <div className="profile-menu">
                                { profileLinks.map((item, key) => (
                                    <Fragment key={key}>
                                        <Link href={`/${item.path}/[id]`} as={`/${item.path}/${user.id}`}>
                                            <a className={`profile-menu__link ${router.pathname === item.pathname ? 'active' : ''}`}>
                                                <div className="profile-menu__link-image">
                                                    <svg>
                                                        <use href={`/icons/sprite.svg#${item.img}`}/>
                                                    </svg>
                                                </div>
                                                <span className="profile-menu__link-text">{item.title}</span>
                                            </a>
                                        </Link>
                                    </Fragment>
                                ))}
                            </div>
                            :
                            ''
                        }
                        <div className="wrap-personal">
                            {user &&
                                <div className="personal">
                                    <div className="personal__wrap">
                                        <div className="personal__avatar">
                                            { user.avatar
                                                ?
                                                <img src={user.avatar} alt="" className="personal__avatar-img"/>
                                                :
                                                <span className="personal__avatar-name">{returnNameLetters(`${user.username}`)}</span>
                                            }
                                        </div>
                                        <div className="personal__wrapper">
                                            <span className="personal__wrapper-name">{user.username}</span>
                                            <div className="personal__city">
                                                <svg className="personal__city-icon">
                                                    <use href="/icons/sprite.svg#placeholder"/>
                                                </svg>
                                                <span className="personal__city-text">{user.city}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="personal__follow">
                                        <span className="personal__follow-following">Подписки • 100</span>
                                        <span className="personal__follow-followers">Подписки • 100</span>
                                    </div>
                                </div>
                            }
                            { authorization
                                ?
                                <div className="personal__status">
                                    <span
                                        className="personal__status-text"
                                        onClick={this.updateUserStatus}
                                    >
                                        {statusText && statusText.length > 0 ? statusText : user.status && user.status.length ? user.status : 'Изменить статус'}
                                    </span>
                                    <UpdateStatus
                                        status={user.status}
                                        id={user.id}
                                        userStatus={userStatus}
                                        updateStatusState={this.updateStatusState}
                                    />
                                </div>
                                :
                                <div className="personal__status">
                                    <span className="personal__status-public">
                                        {user.status && user.status.length ? user.status : 'Статус не указан'}
                                    </span>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="interests">
                        { userLikes && userLikes.map((item, key) => (
                            <Interests item={item} key={key}/>
                        ))}
                    </div>

                    {this.switchViews()}
                </>
            </>
        );
    }
}

export default withRouter(ProfileLayout);
