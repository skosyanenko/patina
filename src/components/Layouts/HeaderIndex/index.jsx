import React from 'react';
import {Link} from 'gatsby';
import Img from "../../../static/images/icons/logotype.svg";

const HeaderIndex = () => (
    <header className="header-index">
        <div className="header-index__container">
            <Link to={'/patina'}>
                <img src={Img} alt="Patina" className="header-index__logo" />
            </Link>
        </div>
     </header>
);

export default HeaderIndex;
