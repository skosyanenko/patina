import React from 'react';

const InputText = ({ type, name, register, icon, label, value, message, errors, req }) => {
    const inputProps = { name, placeholder: ' ', type };
    const required = { value: req, message: `${req ? 'Обязательное поле!' : ''}` };

    const maskSwitch = (type) => {
        switch(type) {
            case 'text':
                return <input {...inputProps} ref={register({required})}/>;
            case 'email':
                return <input {...inputProps} ref={register({required, pattern: {value: new RegExp(value, 'i'), message}})}/>;
            case 'password':
                return <input {...inputProps} ref={register({required, pattern: {value: new RegExp(value, 'g'), message}})}/>;
            default:
                return <input {...inputProps} ref={register({required})}/>;
        }
    };

    return (
        <div className="form__group">
            <div className={`form__group-img form__group-${icon}`}/>
            {maskSwitch(type)}
            <span className="form__group-highlight"/>
            <span className="form__group-bar"/>
            <label>{label}</label>
            <div className="form__group-error">
                { errors[name] && errors[name].message }
            </div>
        </div>
    )
};

export default InputText;
