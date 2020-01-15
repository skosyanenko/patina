import React, {Component} from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import PropTypes from 'prop-types';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

class SelectField extends Component {
    state = {
        selectedOption: null,
    };
    handleChange = selectedOption => {
        this.setState({selectedOption});
        console.log(`Option selected:`, selectedOption);
    };
    render() {
        const {selectedOption} = this.state;
        const {label, img, register, type, isMulti} = this.props;
        const SelectComponent = type === 'creatable' ? CreatableSelect : Select;


        return (
            <div className="select">
                <label htmlFor="category">{label}</label>
                <img src={`images/icons/user/${img}.svg`} alt="" className="form__group-img select__img"/>
                <SelectComponent
                    isMulti={isMulti}
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                    placeholder={"..."}
                    className="form__group"
                    classNamePrefix="select"
                    name={'category'}
                    ref={register({required: true})}
                />
            </div>
        );
    }
}

SelectField.propTypes = {
    register: PropTypes.func
};

export default SelectField;
