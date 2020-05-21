import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputFile extends Component  {
    state = {};

    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state) {
            const { updateFile } = this.props;
            updateFile({ avatar: this.state.avatar });
        }
    };

    handleFile = ( selectorFiles ) => {
        const { name } = this.props;
        let files = this.state[name] || [];
        let fileNames = this.state[name + '_LABEL'] || [];

        for (let file of selectorFiles) {
            this.makeBase64(file).then(data => {
                files.push({value: data, label: file.name});
            });
            fileNames.push(file.name);
        }

        this.setState({
            [name]: files,
            [name + '_LABEL']: fileNames
        });
    };

    makeBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
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
                            value: false,
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
