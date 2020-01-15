import React from 'react';
import PropTypes from 'prop-types';

const InputText = ({img, label, name, register, type}) => {
    return (
        <div className="form__group">
            <img src={`images/icons/user/${img}.svg`} alt="" className="form__group-img"/>
            {type === 'textarea' &&
                <textarea name={name} ref={register({required: true})}/>
                ||
                <input type={type} name={name} required ref={register({required: true})}/>
            }
            <span className="form__group-highlight"/>
            <span className="form__group-bar"/>
            <label>{label}</label>
        </div>
    )
};

InputText.propTypes = {
    label:    PropTypes.string.isRequired,
    img:      PropTypes.string.isRequired,
    name:     PropTypes.string.isRequired,
    register: PropTypes.func
};

export default InputText;
