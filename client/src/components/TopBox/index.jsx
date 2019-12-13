import React from 'react';
import {Link} from 'react-router-dom';
import './index.sass';
import PropTypes from 'prop-types';

const TopBox = ({number, title, author, text}) => {
    return (
        <div className="topBox">
            <div className="topBox__name">
                <div className="topBox__title">
                    <Link to={'/book'}>{title}</Link>
                </div>
                <div className="topBox__number">
                    <span>{number}</span>
                </div>
            </div>
            <div className="topBox__author">{author}</div>
            <div className="topBox__text">{text}</div>
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
