import React from 'react';
import {Link} from 'react-router-dom';
import Rating from 'components/Rating';

const Result = () => (
    <div className="results">
        <Link to={'/books'} className="results__img">
            <img src="images/coverImage/11minutes.jpg" alt=""/>
        </Link>
        <div className="results__wrapper">
            <Link to={'/books'} className="results__wrapper-title">11 минут</Link>
            <h3 className="results__wrapper-author">Пауло Коэльо</h3>
            <Rating/>
            <span className="results__wrapper-weight">146 стр.</span>
        </div>
    </div>
);

export default Result;