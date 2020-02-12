import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './index.sass';

class ProfileMenu extends Component {
    state = {
        navLinks: [
            {title: 'Профиль', path: '/profile/home', img: 'home', viewBox: '0 0 39.413 39.413'},
            {title: 'Подписки', path: '/profile/following', img: 'group', viewBox: '0 0 499.421 499.421'},
            {title: 'Статистика', path: '/profile/statistic', img: 'statistic', viewBox: '0 0 231.233 231.233'}
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
                            <svg viewBox={item.viewBox}>
                                <use href={`/images/icons/form/${item.img}.svg#${item.img}`}/>
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