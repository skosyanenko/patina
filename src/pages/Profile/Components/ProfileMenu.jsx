import React from 'react';
import { NavLink } from 'react-router-dom';
import { profileLinks } from 'config/config';

const ProfileMenu = () => (
    <div className="profile-menu">
        { profileLinks.map((item, key) => (
            <NavLink to={item.path} key={key} className="profile-menu__link">
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

export default ProfileMenu;