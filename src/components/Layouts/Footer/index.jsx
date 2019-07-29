import React from "react";
import Img from "../../../static/images/icons/logotype.svg";

const Footer = () => (
    <footer className="footer">
        <div className="footer__container">
            <img src={Img} alt="Patina" className="footer__logo" />
        </div>
    </footer>
);

export default Footer;
