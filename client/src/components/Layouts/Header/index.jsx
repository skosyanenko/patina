import React from 'react'
import {Link} from 'react-router-dom';
import './index.sass';

const Header = ({isIndex}) => (
    <header className={isIndex ? 'header header--index' : 'header'}>
        <div className="header__container">
            <Link to={'/'}>
                <div className="header__logo" />
            </Link>
        </div>
     </header>
);

export default Header;
