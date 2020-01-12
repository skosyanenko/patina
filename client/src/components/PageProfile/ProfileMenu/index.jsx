import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './index.sass';

class ProfileMenu extends Component {
    render() {
        return (
            <div className="profile-menu">
                <NavLink to={'/profile-home'} className="profile-menu__link">
                    <div className="profile-menu__link-image">
                        <svg viewBox="0 0 39.413 39.413">
                            <use href="/images/icons/user/home.svg#home"/>
                        </svg>
                    </div>
                    <span className="profile-menu__link-text">Профиль</span>
                </NavLink>
                <NavLink to={'/profile-following'} className="profile-menu__link">
                    <div className="profile-menu__link-image">
                        <svg viewBox="0 0 499.421 499.421">
                            <use href="/images/icons/user/group.svg#group"/>
                        </svg>
                    </div>
                    <span className="profile-menu__link-text">Подписки</span>
                </NavLink>
                <NavLink to={'/profile-statistic'} className="profile-menu__link">
                    <div className="profile-menu__link-image">
                        <svg viewBox="0 0 231.233 231.233">
                            <use href="/images/icons/user/statistic.svg#statistic"/>
                        </svg>
                    </div>
                    <span className="profile-menu__link-text">Статистика</span>
                </NavLink>
            </div>
        );
    }
}

ProfileMenu.propTypes = {};

export default ProfileMenu;