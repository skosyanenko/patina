import React from "react";
import "./index.sass";
import {Link} from "gatsby";

const Pagination = () => {
  return (
      <div className='pages'>
          <Link to={'/'} className='pages__prev'>предыдущая</Link>
          <div className='pages__number'>
              <Link to={'/'} className='pages__button'>1</Link>
              <Link to={'/'} className='pages__button'>2</Link>
              <Link to={'/'} className='pages__button'>3</Link>
              <Link to={'/'} className='pages__button'>...</Link>
              <Link to={'/'} className='pages__button'>6</Link>
          </div>
          <Link to={'/'} className='pages__next'>следующая</Link>
      </div>
      )
};

export default Pagination;
