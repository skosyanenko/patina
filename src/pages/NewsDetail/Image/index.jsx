import React from 'react';
import {Link} from 'react-router-dom';
import ArrowBackwards from 'components/ArrowBackwards';
import './index.sass';

const Image = ({viewType, cover, title}) => {
    const view = viewType === 1 || viewType === 2 || viewType === 3;
    return (
        <div className="image">
            <Link to="/news" className="backwards__link">
                <ArrowBackwards/>
            </Link>
            {view ? <h1 className="article__title-horizontal">{title}</h1> : ''}
            <div className="image__wrapper">
                <div className={`${view ? 'image__wrapper-horizontal' : 'image__wrapper-img'}`}>
                    <img src={cover} alt=""/>
                </div>
                <div className="image__wrapper-figure"/>
                <div className="image__wrapper-figure"/>
            </div>
        </div>
    )
};

export default Image;
