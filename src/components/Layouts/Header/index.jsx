import React from 'react'
import {Link} from 'react-router-dom';
import './index.sass';
import EntranceProfile from '../../EntranceProfile';

const Header = ({location, toggleModal}) => (
    <header className={location.pathname === '/' ? 'header header--index' : 'header'}>
        <div className="header__menu"/>
        <div className="header__container">
            <Link to={'/'}>
                <div  className="header__container-logo"/>
            </Link>
        </div>
        <EntranceProfile toggleModal={toggleModal}/>
     </header>
);

export default Header;
