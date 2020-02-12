import React from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import {Controller} from 'react-hook-form';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];

const SelectField = ({type, name, label, icon, isMulti, errors, control}) => {
    const SelectComponent = type === 'creatable' ? CreatableSelect : Select;
    const required = {value: true, message: 'Обязательное поле!'};
    return (
        <div className="select">
            <div className={`form__group-img select__img form__group-${icon}`}/>
            <Controller
                as={<SelectComponent options={options} />}
                control={control}
                rules={{required: required.message}}
                onChange={([selected]) => ({value: selected})}
                name={name}
                isMulti={isMulti}
                placeholder={label}
                className="form__group"
                classNamePrefix="select"
                maxMenuHeight={150}
            />
            {errors[name] && errors[name].message}
        </div>
    );
};

export default SelectField;
