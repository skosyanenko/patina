import React from 'react';
import PropTypes from "prop-types";

const Select = ({register}) => {
    return (
        <div className="select">
            <label htmlFor="category">Выберите категории:</label>
            <select id="category" className="form-book__group" name={'category'} ref={register({required: true})}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </div>

    )
};

Select.propTypes = {
    register: PropTypes.func
};

export default Select;
