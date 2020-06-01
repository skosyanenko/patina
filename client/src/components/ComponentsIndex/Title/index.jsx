import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title, subtitle }) => {
  return (
      <div className="main__wrap">
          <span className="main__wrap-title">{title}</span>
          <span className="main__wrap-subtitle">{subtitle}</span>
      </div>
  )
};

Title.propTypes = {
    title: PropTypes.string.isRequired
};

export default Title;
