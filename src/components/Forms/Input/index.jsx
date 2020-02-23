import React from 'react';
import InputMask from 'react-input-mask';
import {Controller} from 'react-hook-form';

const InputText = ({type, name, register, icon, label, value, message, errors, control}) => {
    const inputProps = {name, placeholder: ' ', type};
    const required = {value: true, message: 'Обязательное поле!'};

    const phoneInput = () => (
        <Controller
            as={
                <InputMask
                    {...inputProps}
                    mask="+7 (999) 999-99-99"
                    maskChar=" "
                />
            }
            defaultValue={""}
            control={control}
            rules={{required: required.message}}
            name={name}
        />
    );

    const textArea = () => (
        <Controller
            as={
                <textarea placeholder=" "/>
            }
            defaultValue={""}
            control={control}
            rules={{required: required.message}}
            name={name}
        />
    );

    const maskSwitch = (type) => {
        switch(type) {
            case 'textarea':
                return textArea();
            case 'text':
                return <input {...inputProps} ref={register({required})}/>;
            case 'tel':
                return phoneInput();
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
                {errors[name] && errors[name].message}
            </div>
        </div>
    )
};

export default InputText;
