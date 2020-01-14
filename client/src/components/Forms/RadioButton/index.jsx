import React from 'react';

const RadioButton = () => {
    return (
        <div className="registration__radio">
            <span>Пол</span>
            <div className="registration__radio-radio">
                <input type="radio" name="sex" id="man"/>
                <label htmlFor="man">Мужской</label>
            </div>
            <div className="registration__radio-radio">
                <input type="radio" name="sex" id="woman"/>
                <label htmlFor="woman">Женский</label>
            </div>
        </div>
    )
};

RadioButton.propTypes = {};

export default RadioButton;
