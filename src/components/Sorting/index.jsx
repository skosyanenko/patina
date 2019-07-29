import React from "react";
import {Link} from "gatsby";
import "./index.sass";

const Sorting = () => {
  return (
        <div className="sorting">
            <div className="sorting__title">
                Cортировать по:
            </div>
            <div className="sorting__container">
                <Link to={'/'} className="sorting__type">названию</Link>
                <Link to={'/'} className="sorting__type">автору</Link>
                <Link to={'/'} className="sorting__type">рейтингу</Link>
            </div>
        </div>
  )
};

export default Sorting;
