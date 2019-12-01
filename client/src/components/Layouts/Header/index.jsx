import React from 'react';
import {Link} from 'react-router-dom';

const Header = ({index}) => (
    <header className={index ? 'header header--index' : 'header'}>
        <div className="header__container">
            <Link to={'/'}>
                <img
                  src={process.env.PUBLIC_URL + '/images/icons/logotype.svg'}
                  alt="Patina"
                  className="header__logo"
                />
            </Link>
        </div>
     </header>
);

export default Header;
