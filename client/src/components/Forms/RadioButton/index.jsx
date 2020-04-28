import React, { Component } from 'react';

class RadioButton extends Component {
    state = {
        viewType: ''
    };

    handleChange = ({ target: {value} }) => {
        const { onChange, name } = this.props;

        this.setState({
            viewType: value
        }, () => {
            onChange(name, value);
        })
    };

    render() {
        const required = { value: true, message: 'Обязательное поле!' };
        const { label, name, options, register, errors } = this.props;

        return (
            <div className="form__radio" ref={register({name}, {required})}>
                <span>{ label }</span>
                { options && Object.keys(options).map((item, key) => (
                    <div className="form__radio-radio" key={key}>
                        <input
                            id={item}
                            type="radio"
                            value={item}
                            onChange={this.handleChange}
                            name={name}
                        />
                        <label htmlFor={item}>
                            { options[item] }
                        </label>
                    </div>
                ))}
                <div className="form__group-error">
                    { errors[name] && errors[name].message }
                </div>
            </div>
        )
    }
}

export default RadioButton;
