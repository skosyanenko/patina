import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import InputText from './Input';
import InputFile from './File';
import SelectField from './SelectField';
import RadioButton from './RadioButton';
import TextEditor from './TextEditor';
import PropTypes from 'prop-types';

const FormManager =({title, fields, button, classNamePrefix, classNamePref, btnStyle, API}) => {
    const { handleSubmit, register } = useForm();

    const onSubmit = values => {
        console.log(values);
        axios.post(`/api/${API}`,{values})
          .then(res => console.log(res.data))
          .catch(err => console.log(err));
    };

    const typeSwitcher = type => {
        switch(type) {
            case 'text':
            case 'time':
            case 'date':
            case 'textarea':
                return InputText;
            case 'file':
                return InputFile;
            case 'select':
            case 'creatable':
                return SelectField;
            case 'radio':
                return RadioButton;
            case 'editor':
                return TextEditor;
        }
    };

    return (
        <>
            <div className="form__title">{title}</div>
            <form className={`form-container ${classNamePrefix}`} onSubmit={handleSubmit(onSubmit)}>
                <div className={`form ${classNamePref}`}>
                    { fields.map((field, key) => {
                        const Component = typeSwitcher(field.type);
                        return (
                            <Component
                                key={key}
                                label={field.label}
                                type={field.type}
                                img={field.img}
                                optionFirst={field.optionFirst}
                                optionSecond={field.optionSecond}
                                isMulti={field.isMulti}
                                name={field.name}
                                register={register}
                            />
                        );
                    })}
                    <button type="submit" className={`button buttonGreen ${btnStyle}`}>
                        {button}
                    </button>
                </div>
            </form>
        </>
    );
};

FormManager.propTypes = {
    API:             PropTypes.string.isRequired,
    title:           PropTypes.string.isRequired,
    button:          PropTypes.string.isRequired,
    classNamePrefix: PropTypes.string,
    classNamePref:   PropTypes.string,
    btnStyle:        PropTypes.string
};

export default FormManager;