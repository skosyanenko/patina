import React from 'react';
import {Link} from 'gatsby';
import Img from "../../../static/images/icons/logotype.svg";

const Header = ({index}) => (
    <header className={index ? 'header header--index' : 'header'}>
        <div className="header__container">
            <Link to={'/'}>
                <img src={Img} alt="Patina" className="header__logo" />
            </Link>
        </div>
     </header>
);

export default Header;
