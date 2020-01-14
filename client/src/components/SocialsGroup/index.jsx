import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.sass';

class Socials extends Component {
    render() {
        return (
            <div className="socials">
                <Link to={'/'}>
                    <div className="socials__vk"/>
                </Link>
                <Link to={'/'}>
                    <div className="socials__tg"/>
                </Link>
                <div className="socials__bookmark">
                    <svg viewBox="-120 0 511 511.99905">
                        <use href="/images/icons/socialsGroup/bookmark.svg#bookmark"/>
                    </svg>
                </div>
            </div>
        );
    }
}

Socials.propTypes = {};

export default Socials;
