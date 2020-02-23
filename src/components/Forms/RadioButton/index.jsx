import React, {Component} from 'react';

class RadioButton extends Component {
    state = {
        typeView: ''
    };

    render() {
        const required = {value: true, message: 'Обязательное поле!'};

        const handleChange = ({target: {value}}) => {
            onChange(name, value);
            this.setState({
                typeView: value
            },() => {
                this.props.hookView(this.state.typeView);
            })
        };

        const {label, name, options, onChange, prefix, register, errors} = this.props;

        return (
            <div className={`${prefix}__radio `} ref={register({name}, {required})}>
                <span>{label}</span>
                {options && Object.keys(options).map((item, key) => (
                    <div className={`${prefix}__radio-radio`} key={key}>
                        <input
                            id={item}
                            type="radio"
                            value={item}
                            onChange={handleChange}
                            name={name}
                        />
                        <label htmlFor={item}>
                            {options[item]}
                        </label>
                    </div>
                ))}
                <div className="form__group-error">
                    {errors[name] && errors[name].message}
                </div>
            </div>
        )
    }
}

export default RadioButton;
