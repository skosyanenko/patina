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
            this.setState({
                authorization: true,
                userLikes: this.getItems()
            })
        }
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
        const { authorization } = this.state;
        const { router, toggleModal, user } = this.props;

        if (router.pathname === '/profile/[id]') return <ProfileHome user={user} toggleModal={toggleModal} authorization={authorization}/>;

        switch(router.query.type) {
            case 'edit':
                return <ProfileEdit user={user} authorization={authorization}/>;
            case 'follows':
                return <ProfileFollowing user={user} toggleModal={toggleModal} authorization={authorization}/>;
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
                                <Link href={`/profile/[id]`} as={`/profile/${user.id}`}>
                                    <a className={`profile-menu__link ${router.pathname === '/profile/[id]' ? 'active' : ''}`}>
                                        <div className="profile-menu__link-image">
                                            <svg>
                                                <use href={`/icons/sprite.svg#home`}/>
                                            </svg>
                                        </div>
                                        <span className="profile-menu__link-text">Профиль</span>
                                    </a>
                                </Link>
                                { profileLinks.map((item, key) => (
                                    <Fragment key={key}>
                                        <Link href={`/profile/[id]/${item.type}`} as={`/profile/${user.id}/${item.type}`}>
                                            <a className={`profile-menu__link ${router.query.type === item.type ? 'active' : ''}`}>
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
                                        <span className="personal__follow-following">Подписки • {user.follow.length || 0}</span>
                                        <span className="personal__follow-followers">Подписки • {user.followers.length || 0}</span>
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
