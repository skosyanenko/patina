import React from 'react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import InputText from './Input';
import InputFile from './File';
import SelectField from './SelectField';
import RadioButton from './RadioButton';
import TextEditor from './TextEditor';

const KEY = '6LdFQPoUAAAAAIRMvax7tN8cqMP4poaEbV5xj4LH';

const HookForm = (props) => {
    const { handleSubmit, register, setValue, watch, getValues, errors, formState, control } = useForm({
        defaultValues: props.defaultValues
    });

    watch('viewType');

    const typeSwitcher = type => {
        switch(type) {
            case 'text':
            case 'password':
            case 'email':
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

    const onChange = (value) => {
        console.log("Captcha value:", value);
    };

    return (
        <form className={`form-wrapper form ${props.classAnimate}`}
              onSubmit={ handleSubmit(props.onSubmit) }
        >
            <div className="form">
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
                <div className="recaptcha">
                    <ReCAPTCHA
                        sitekey={KEY}
                        onChange={onChange}
                    />
                </div>
                <button type="submit" className={`button button-green ${props.classPrefix} ${Object.keys(errors).length ? 'disabled' : ''}`}>
                    { props.button }
                </button>
            </div>
        </form>
    );
};

export default HookForm;