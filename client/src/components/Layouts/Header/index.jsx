import React from 'react'
import {Link} from 'react-router-dom';
import './index.sass';
import User from '../../User';

const Header = ({location, toggleModal}) => (
    <header className={location.pathname === '/' ? 'header header--index' : 'header'}>
        {/*<div className="header__menu"/>*/}
        <div className="header__container">
            <Link to={'/'}>
                <div className="header__container-logo"/>
            </Link>
        </div>

        {/*<User*/}
        {/*  isTimeToRead={false}*/}
        {/*  isButton={true}*/}
        {/*  isTime={false}*/}
        {/*  buttonText={'Войти'}*/}
        {/*  toggleModal={toggleModal}*/}
        {/*/>*/}

     </header>
);

export default Header;
