import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './index.sass';

class ProfileMenu extends Component {
    state = {
        navLinks: [
            {title: 'Профиль', path: '/profile/home', img: 'home'},
            {title: 'Подписки', path: '/profile/following', img: 'group'},
            {title: 'Статистика', path: '/profile/statistic', img: 'statistic'}
        ],
    };

    render() {
        const {navLinks} = this.state;

        const defaults = {
            className: 'profile-menu__link'
        };

        return (
            <div className="profile-menu">
                {navLinks.map((item, key) => (
                    <NavLink to={item.path} key={key} {...defaults} className="profile-menu__link">
                        <div className="profile-menu__link-image">
                            <svg>
                                <use href={`/images/icons/sprite.svg#${item.img}`}/>
                            </svg>
                        </div>
                        <span className="profile-menu__link-text">{item.title}</span>
                    </NavLink>
                ))}
            </div>
        );
    }
}

export default ProfileMenu;