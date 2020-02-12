import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Icons from 'components/Icons';
import './index.sass';

const NewsBox = ({horizontal, img, title, text}) => {
    return (
        <div className={horizontal ? 'box box--horizontal': 'box'}>
            <div className="box__row">
                <Link to={'/new'}>
                    <div className={horizontal ? 'box__wrap box__wrap--horizontal' : 'box__wrap'}>
                        <img src={img} alt="" className="box__img"/>
                    </div>
                </Link>
                {horizontal &&
                    <div className="box__icons box__icons--horizontal">
                        <Icons like={16} views={16} clock={16}/>
                        <Link to={'/new'} className="button button-white">Подробнее</Link>
                    </div>
                }
            </div>
            <div className={horizontal ? 'box__about box__about--horizontal' : 'box__about'}>
                <div className="box__desc">
                    <Link to={'/new'} className="box__title">{title}</Link>
                    <span className="box__text">{text}</span>
                </div>
                {!horizontal &&
                    <div className="box__icons">
                        <Icons like={16} views={16} clock={16}/>
                        <Link to={'/new'} className="button button-white">Подробнее</Link>
                    </div>
                }
            </div>
        </div>
    )
};

NewsBox.propTypes = {
    img:   PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text:  PropTypes.string.isRequired
};

export default NewsBox;
