import React from 'react';
import PropTypes from 'prop-types';
import './index.sass';

const Title = ({ title, subtitle }) => {
  return (
      <div className="main__wrap">
          <h1 className="main__wrap-title">{title}</h1>
          <h2 className="main__wrap-subtitle">{subtitle}</h2>
      </div>
  )
};

Title.propTypes = {
    title: PropTypes.string.isRequired
};

export default Title;
