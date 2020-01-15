import React from 'react';
import PropTypes from 'prop-types';

const RadioButton = ({label, name, optionFirst, optionSecond}) => {
    return (
        <div className="registration__radio">
            <span>{label}</span>
            <div className="registration__radio-radio">
                <input type="radio" name={name} id="man"/>
                <label htmlFor="man">{optionFirst}</label>
            </div>
            <div className="registration__radio-radio">
                <input type="radio" name={name} id="woman"/>
                <label htmlFor="woman">{optionSecond}</label>
            </div>
        </div>
    )
};

RadioButton.propTypes = {
    optionFirst:   PropTypes.string.isRequired,
    optionSecond:  PropTypes.string.isRequired
};

export default RadioButton;
