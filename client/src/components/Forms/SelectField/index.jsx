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
        this.fetchAllOptions();
    };

    fetchAllOptions = async () => {
        return await axios.get(`/api/v1/${this.props.api}`)
            .then(res => {
                if (res.data) {
                    this.setState({options: res.data.map(item => (
                        {value: item.id, label: item.name || item.title}
                    ))});
                }
            })
            .catch(err => {
                console.log('Ошибка получения элементов из базы данных' + err)
            });
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
                            return { value: selected };
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
