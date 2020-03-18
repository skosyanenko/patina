import React from 'react'
import './index.sass';

const Loader = () => (
  <div className="loader">
      <div className="loader__inner">
          <span className="loader__inner-left"/>
          <span className="loader__inner-middle"/>
          <span className="loader__inner-right"/>
      </div>
      <ul className="loader__list">
          {[1, 2 ,3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map((star, key) => (
                <li key={key}/>
          ))}
      </ul>
  </div>
);

export default Loader;
