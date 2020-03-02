import React, {Component} from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import {Controller} from 'react-hook-form';
import axios from "axios";

// const options = [
//     { value: 'chocolate', label: 'Chocolate' },
//     { value: 'strawberry', label: 'Strawberry' },
//     { value: 'vanilla', label: 'Vanilla' }
// ];

class SelectField extends Component {
    state = {
        options: []
    };

    fetchAllOptions = async () => {
        return await axios.get('/api/v1/categories')
            .then(res => {
                if (res.data) {
                    return res.data;
                }
            })
            .catch(err => {
                console.log('Ошибка получения элементов из бд' + err)
            });
    };

    componentDidMount() {
        this.fetchAllOptions().then(res => {
            this.setState({options: res})
        });
    }
    render() {
        const {type, name, label, icon, isMulti, errors, control} = this.props;
        const {options} = this.state;
        const SelectComponent = type === 'creatable' ? CreatableSelect : Select;
        const required = {value: true, message: 'Обязательное поле!'};
        console.log(options);
        return (
            <div className="form__group select">
                <div className={`form__group-img select__img form__group-${icon}`}/>
                    <Controller
                        as={<SelectComponent options={options} />}
                        control={control}
                        rules={{required: required.message}}
                        onChange={([selected]) => ({value: selected})}
                        name={name}
                        isMulti={isMulti}
                        placeholder={label}
                        classNamePrefix="select"
                        maxMenuHeight={150}
                    />
                <div className="form__group-error">
                    {errors[name] && errors[name].message}
                </div>
            </div>
        );
    }
};

export default SelectField;
