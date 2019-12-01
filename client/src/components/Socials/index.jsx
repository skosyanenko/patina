import React from "react";
import {Link} from 'react-router-dom';
import "./index.sass";

const Socials = () => {
  return (
      <div className="socials">
        <Link to={'/'}>
            <img src={'/images/icons/socials/vk.svg'} alt="" className="socials__vk"/>
        </Link>
        <Link to={'/'}>
            <img src={'/images/icons/socials/telegram.svg'} alt="" className="socials__tg"/>
        </Link>
        <Link to={'/'}>
            <img src={'/images/icons/socials/facebook.svg'} alt="" className="socials__fb"/>
        </Link>
      </div>
  )
};

export default Socials;
