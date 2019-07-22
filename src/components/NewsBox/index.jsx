import React from "react";
import {Link} from 'gatsby';
import "./index.sass";
import Icons from "../Icons";
import PropTypes from "prop-types";

const NewsBox = ({horizontal, img, title, text}) => {
    console.log(img);
    return (
        <div className={horizontal ? 'box box--horizontal': 'box'}>
            <div className="box__row">
                <div className={horizontal ? 'box__wrap box__wrap--horizontal' : 'box__wrap'}>
                    <img src={img} alt="" className="box__img"/>
                </div>
                { (horizontal) ?
                    <div className="box__icons box__icons--horizontal">
                        <Icons/>
                        <Link to={'/news'} className="box__button box__button--horizontal">Далее</Link>
                    </div> : '' }
            </div>
            <div className={ horizontal ? 'box__text box__text--horizontal' : 'box__text'}>
                <div className="box__desc">
                    <div className="box__title">{title}</div>
                    <div className="box__about">{text}</div>
                </div>
                { (!horizontal) ?
                    <div className="box__icons">
                        <Icons/>
                        <Link to={'/news'} className="box__button">Далее</Link>
                    </div>
                    : '' }
            </div>
        </div>
  )
};

NewsBox.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default NewsBox;
