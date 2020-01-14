import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import InputText from './Input';
import InputFile from './File';
import SelectField from './SelectField';
import RadioButton from './RadioButton';
import PropTypes from 'prop-types';

const FormManager =({ title, fields, button, classNamePrefix, classNamePref }) => {
    const { handleSubmit, register } = useForm();

    const onSubmit = values => {
        console.log(values);
        axios.post('/api/books',{ values })
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
            case 'radiobutton':
                return RadioButton;
        }
    };

    return (
        <>
            <div className="form__title">{ title }</div>
            <form className={`form-container ${classNamePrefix}`} onSubmit={handleSubmit(onSubmit)}>
                <div className={`form ${classNamePref}`}>
                    { fields.map((field, key) => {
                        const Component = typeSwitcher(field.type);
                        return (
                            <Component
                                key={ key }
                                label={ field.label }
                                type={ field.type }
                                img={ field.img }
                                name={ field.name }
                                register={ register }
                            />
                        );
                    })}
                    <button type="submit" className="button buttonGreen">
                        { button }
                    </button>
                </div>
            </form>
        </>
    );
};

FormManager.propTypes = {
    title:           PropTypes.string.isRequired,
    button:              PropTypes.string.isRequired,
    classNamePrefix: PropTypes.string,
    classNamePref:   PropTypes.string
};

export default FormManager;