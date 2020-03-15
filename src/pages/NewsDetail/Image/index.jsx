import React from 'react';
import {Link} from 'react-router-dom';
import ArrowBackwards from 'components/ArrowBackwards';
import './index.sass';

const Image = ({news}) => (
    <div className="image">
        <Link to="/news" className="backwards__link">
            <ArrowBackwards/>
        </Link>
        <div className="image__wrapper">
            <div className="image__wrapper-img">
                <img src={news.cover} alt=""/>
            </div>
            <div className="image__wrapper-figure"/>
            <div className="image__wrapper-figure"/>
        </div>
    </div>
);

export default Image;
