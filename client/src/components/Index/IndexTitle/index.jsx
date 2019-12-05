import React from 'react'
import './index.sass'
import PropTypes from 'prop-types'

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