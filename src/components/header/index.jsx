import React from "react"
import Img from "../../static/images/icons/logotype.svg"

const Header = () => (
  <header>
    <div className='header-container'>
        <a href="#">
            <img src={Img} alt="Patina"/>
        </a>
    </div>
  </header>
);

export default Header;
