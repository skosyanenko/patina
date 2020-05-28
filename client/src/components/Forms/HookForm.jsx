import React, { useEffect, useState } from 'react';
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

    const initialState = {
        captcha: '',
        isDisabled: false
    };

    const [state, setState] = useState(initialState);

    useEffect(() => {
        if (props.api !== 'auth/local/register') {
            setState({
                ...state,
                captcha: 'Не страница регистрации!'
            })
        }
    }, [props])

    useEffect(() => {
        setState({
            ...state,
            isDisabled: Object.keys(errors).length > 0
        })
    }, [Object.keys(errors).length])

    useEffect(() => {
        setState({
            ...state,
            isDisabled: state.captcha === null || state.captcha.length === 0
        })
    }, [state.captcha])

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
        setState({
            ...state,
            captcha: value
        });
    };

    return (
        <form className={`form-wrapper form ${props.classAnimate}`}
              onSubmit={handleSubmit(props.onSubmit)}
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
                {props.api === 'auth/local/register' &&
                    <div className="recaptcha">
                        <ReCAPTCHA
                            sitekey={KEY}
                            onChange={onChange}
                        />
                    </div>
                    || ''
                }
                <button
                    type="submit"
                    disabled={state.isDisabled}
                    className={`button button-green ${props.classPrefix} `}
                >
                    { props.button }
                </button>
            </div>
        </form>
    );
};

export default HookForm;