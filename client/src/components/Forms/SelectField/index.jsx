import React, { Component } from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { Controller } from 'react-hook-form';
import axios from 'axios';

class SelectField extends Component {
    state = {
        options: []
    };

    componentDidMount() {
        this.getOptions();
    };

    getOptions = () => {
        const { API_URL } = process.env;
        const { api } = this.props;

        axios.get(`${API_URL}/${api}?_limit=100`)
            .then(res => {
                res.data &&
                this.setState({
                    options: res.data.map(item => (
                        {value: item.id, label: item.name || item.title}
                    ))
                })
            })
            .catch(err => {
                console.log('Ошибка получения элементов из бд' + err)
            });
    };

    render() {
        const { type, name, label, icon, isMulti, errors, control, req } = this.props;

        const { options } = this.state;

        const SelectComponent = type === 'creatable' ? CreatableSelect : Select;
        const required = { value: req, message: 'Обязательное поле!' };

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
                        rules={{required: required}}
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
