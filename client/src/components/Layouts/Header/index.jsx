import React from 'react'
import {Link} from 'react-router-dom';
import './index.sass';

const Header = ({location, toggleModal}) => (
    <header className={location.pathname === '/' ? 'header header--index' : 'header'}>
        <div className="header__container">
            <Link to={'/'}>
                <div className="header__logo" />
            </Link>
        </div>
        <button onClick={toggleModal}>войти</button>
     </header>
);

export default Header;
