import React from 'react';
import PropTypes from 'prop-types';
import './index.sass';

const IndexTitle = ({title, subtitle}) => {
  return (
      <div className="container">
          <div className="container__title">{title}</div>
          <div className="container__subtitle">{subtitle}</div>
      </div>
  )
};

IndexTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default IndexTitle;
