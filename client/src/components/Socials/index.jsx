import React from 'react';
import {Link} from 'react-router-dom';
import './index.sass';

const Socials = () => {
    return (
        <div className="socials">
            <Link to={'/'}>
                <div className="socials__vk"/>
            </Link>
            <Link to={'/'}>
                <div className="socials__tg"/>
            </Link>
            <Link to={'/'}>
                <div className="socials__fb"/>
            </Link>
        </div>
    )
};

export default Socials;
