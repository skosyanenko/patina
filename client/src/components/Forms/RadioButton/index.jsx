import React from 'react';

const RadioButton = ({label, name, optionFirst, onChange, optionSecond, prefix, register, errors}) => {
    const required = {value: true, message: 'Обязательное поле!'};

    const handleChange = ({target: {value}}) => onChange(name, value);

    return (
        <div className={`${prefix}__radio `} ref={register({name}, {required})}>
            <span>{label}</span>
            <div className={`${prefix}__radio-radio`}>
                <input
                    id={optionFirst}
                    type="radio"
                    value={optionFirst}
                    onChange={handleChange}
                    name={name}
                />
                <label htmlFor={optionFirst}>
                    {optionFirst}
                </label>
            </div>
            <div className={`${prefix}__radio-radio`}>
                <input
                    id={optionSecond}
                    type="radio"
                    value={optionSecond}
                    onChange={handleChange}
                    name={name}
                />
                <label htmlFor={optionSecond}>
                    {optionSecond}
                </label>
            </div>
            <div className={`${prefix}__radio-error`}>{errors[name] && errors[name].message}</div>
        </div>
    )
};

export default RadioButton;
