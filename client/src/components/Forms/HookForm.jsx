import React from 'react';
import { useForm } from 'react-hook-form';
import InputText from './Input';
import InputFile from './File';
import SelectField from './SelectField';
import RadioButton from './RadioButton';
import TextEditor from './TextEditor';

const HookForm = props => {
    const { handleSubmit, register, setValue, watch, getValues, errors, formState, control } = useForm();

    watch('viewType');

    const typeSwitcher = type => {
        switch(type) {
            case 'text':
            case 'time':
            case 'date':
            case 'tel':
            case 'password':
            case 'email':
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
            default:
                return '';
        }
    };
    
    return (
        <form className={`form-wrapper ${props.prefix} ${props.classAnimate}`}
              onSubmit={ handleSubmit(props.onSubmit) }
        >
            <div className={`form ${props.classPrefix}`}>
                { props.fields && props.fields.map((field, key) => {
                    const Component = typeSwitcher(field.type);
                        return (
                            <Component
                                key={key}
                                {...props}
                                {...field}
                                register={register}
                                getValues={getValues}
                                onChange={setValue}
                                isSubmit={formState.isSubmitting}
                                control={control}
                                errors={errors}
                            />
                        )
                    }
                )}
                <button type="submit" className={`button button-green ${Object.keys(errors).length ? 'disabled' : ''}`}>
                    { props.button }
                </button>
            </div>
        </form>
    );
};

export default HookForm;