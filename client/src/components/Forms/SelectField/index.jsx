import React, { Component } from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { Controller } from 'react-hook-form';

class SelectField extends Component {
    state = {
        options: []
    };

    componentDidMount() {
        this.getOptions();
    };

    getOptions = () => {
        const { api, optionBooks, optionCategories, optionAuthors } = this.props;

        const routs = {
            books: optionBooks ? optionBooks : '',
            categories: optionCategories ? optionCategories : '',
            authors: optionAuthors ? optionAuthors : ''
        };

        this.setState({options: routs[api].map(item => (
              {value: item.id, label: item.name || item.title}
        ))});
    };

    render() {
        const { type, name, label, icon, isMulti, errors, control } = this.props;

        const { options } = this.state;

        const SelectComponent = type === 'creatable' ? CreatableSelect : Select;
        const required = { value: true, message: 'Обязательное поле!' };

        if ( options.length === 0 ) return 'Loading...';

        return (
            <div className="form__group select">
                <div className={`form__group-img select__img form__group-${icon}`}/>
                    <Controller
                        as={<SelectComponent options={options} />}
                        control={control}
                        onChange={([selected]) => {
                            return selected;
                        }}
                        rules={{required: required.message}}
                        name={name}
                        isMulti={isMulti}
                        placeholder={label}
                        classNamePrefix="select"
                        maxMenuHeight={150}
                    />
                <div className="form__group-error">
                    { errors[name] && errors[name].message }
                </div>
            </div>
        );
    }
}

export default SelectField;
