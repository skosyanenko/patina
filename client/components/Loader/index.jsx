import React from 'react'

const Loader = () => (
  <div className="loader">
      <div className="loader__inner">
          <span className="loader__inner-left"/>
          <span className="loader__inner-right"/>
      </div>
      <ul className="loader__list">
          { Array.from(Array(18).keys()).map((item, key) => (
                <li key={key}/>
          ))}
      </ul>
  </div>
);

export default Loader;
