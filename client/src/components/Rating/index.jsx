import React, {Component} from 'react';
import './index.sass';
import PropTypes from 'prop-types';

class Rating extends Component {


    render() {
        return (
            <div className="rating">
                <div className="rating__elem">
                    <svg viewBox="0 0 406.125 406.125">
                        <use href="/images/icons/star.svg#star"/>
                    </svg>
                </div>
                <div className="rating__elem">
                    <svg viewBox="0 0 406.125 406.125">
                        <use href="/images/icons/star.svg#star"/>
                    </svg>
                </div>
                <div className="rating__elem">
                    <svg viewBox="0 0 406.125 406.125">
                        <use href="/images/icons/star.svg#star"/>
                    </svg>
                </div>
                <div className="rating__elem">
                    <svg viewBox="0 0 406.125 406.125">
                        <use href="/images/icons/star.svg#star"/>
                    </svg>
                </div>
                <div className="rating__elem">
                    <svg viewBox="0 0 406.125 406.125">
                        <use href="/images/icons/star.svg#star"/>
                    </svg>
                </div>
            </div>
        );
    }
}

Rating.propTypes = {};

export default Rating;