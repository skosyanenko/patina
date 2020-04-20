import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputFile extends Component  {
    state = {};

    handleFile = ( selectorFiles ) => {
        const { name } = this.props;
        let files = this.state[name] || [];
        let fileNames = this.state[name + '_LABEL'] || [];

        for (let file of selectorFiles) {
	        files.push({value: file, label: file.name});
	        fileNames.push(file.name);
        }

        if (files.length > 0) {
	        this.setState({
		        [name]: files,
		        [name + '_LABEL']: fileNames
	        }, () => {
		        this.setFieldValue(this.state[name][0].value);
	        });
        }
    };

    deleteFile = ( name, item ) => {
        let newArr = this.deleteValue(this.state[name], item);
        let newNames = newArr.map(x => x.label);
        this.setState({[name]: newArr, [name + '_LABEL']: newNames});
    };

    deleteValue = ( arr, value ) => {
        let newArr = arr;
        let index = newArr.findIndex(item => Object.values(item).includes(value));
        if (index >= 0) newArr.splice( index, 1 );
        return newArr;
    };

    setFieldValue = value => this.props.onChange(this.props.name, value);

    render() {
        const { name, label, register, errors } = this.props;
        const labels = this.state[name + '_LABEL'];

        return (
            <div className="form__upload">
                <label htmlFor={name}>
                    <input
                        type="file"
                        id={name}
                        name={name}
                        onChange={e => this.handleFile(e.target.files)}
                        ref={register({
                            required: 'Обязательное поле!',
                            validate: value => value[0].size < 3 * 1024 * 1024 || 'Превышен лимит 3мб'
                        })}
                        accept="image/*"
                    />
                    <div className="form__upload-img"/>
                </label>
                <div className="form__upload-text">
                    <span>{label}</span>
                    {labels && labels.map((item, key) => (
                        <div className="form__upload-fileName" key={key}>
                            <span>{item}</span>
                            <div className="form__upload-close"
                                 onClick={() => this.deleteFile(name, item)}
                            />
                        </div>
                    ))}
                    <div className="form__group-error">
                        { errors[name] && errors[name].message }
                    </div>
                </div>
            </div>
        )
    }
}

InputFile.propTypes = {
    label: PropTypes.string.isRequired,
    name:  PropTypes.string.isRequired
};

export default InputFile;
