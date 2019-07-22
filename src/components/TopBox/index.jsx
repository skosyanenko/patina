import React from "react";
import {Link} from "gatsby";
import "./index.sass";
import PropTypes from "prop-types";

const TopBox = ({number, title, author, text}) => {
  return (
      <div className="top-box">
          <div className="top-box__name">
              <Link to={'/'} className="top-box__title">{title}</Link>
              <div className="top-box__number">{number}</div>
          </div>
          <div className="top-box__author">{author}</div>
          <div className="top-box__text">{text}</div>
      </div>
  )
};

TopBox.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default TopBox;
