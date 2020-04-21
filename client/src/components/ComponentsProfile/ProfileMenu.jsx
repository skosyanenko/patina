import React, {Fragment} from 'react';
import Link from 'next/link';
import { profileLinks } from 'config/config';

const ProfileMenu = () => (
    <div className="profile-menu">
        { profileLinks.map((item, key) => (
            <Fragment key={key}>
                <Link href={'/profile/[type]'} as={`/profile/${item.path}`}>
                    <a className="profile-menu__link">
                        <div className="profile-menu__link-image">
                            <svg>
                                <use href={`/public/icons/sprite.svg#${item.img}`}/>
                            </svg>
                        </div>
                        <span className="profile-menu__link-text">{item.title}</span>
                    </a>
                </Link>
            </Fragment>
        ))}
    </div>
);

export default ProfileMenu;