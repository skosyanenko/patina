import React from "react";
import {Link} from "gatsby";
import "./index.sass";
import PropTypes from "prop-types";

const TopBox = ({number, title, author, text}) => {
  return (
      <div className="top-box">
          <div className="top-box__name">
              <div className="top-box__title">
                  <Link to={'/book'}>{title}</Link>
              </div>
              <div className="top-box__number">
                  <span>{number}</span>
              </div>
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
