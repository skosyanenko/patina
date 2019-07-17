import React from "react";
import {Link} from "gatsby";
import Img from "../../static/images/icons/loupe.svg";

const Menu = () => {
  return (
    <nav className="menu">
      <div className="menu__container">
        <Link to={'/'} className="menu__link">
          книги
        </Link>
        <Link to={'/'} className="menu__link">
          топы
        </Link>
        <Link to={'/'} className="menu__link">
          критика
        </Link>
        <Link to={'/'} className="menu__link">
          эвенты
        </Link>
        <Link to={'/'} className="menu__link">
          что нового
        </Link>
      </div>
      <div className="menu__search">
        <img src={Img} alt=" " className="menu__loupe" />
      </div>
    </nav>
  )
};

export default Menu;
