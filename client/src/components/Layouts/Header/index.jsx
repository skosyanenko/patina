import React from 'react'
import {Link} from 'react-router-dom'

const Header = ({index}) => (
    <header className={index ? 'header header--index' : 'header'}>
        <div className="header__container">
            <Link to={'/'}>
                <div className="header__logo" />
            </Link>
        </div>
     </header>
);

export default Header;
