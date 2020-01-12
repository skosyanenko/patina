import React from 'react';
import PropTypes from "prop-types";

const InputText = ({img, label, name, register}) => {
    return (
        <div className="form-book__group">
            <img src={`images/icons/user/${img}.svg`} alt="" className="form-book__group-img"/>
            <input type="text" name={name} required ref={register({required: true})}/>
            <span className="form-book__group-highlight"/>
            <span className="form-book__group-bar"/>
            <label>{label}</label>
        </div>
    )
};

InputText.propTypes = {
    label: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    register: PropTypes.func
};

export default InputText;
