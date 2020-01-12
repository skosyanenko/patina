import React, {Component} from 'react';
import PropTypes from "prop-types";

class InputFile extends Component  {
    state = {};

    handleFile = (selectorFiles) => {
        const {name} = this.props;
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
    }

    render() {
        const {name, label} = this.props;
        const labels = this.state[name + '_LABEL'];

        return (
            <label htmlFor={name} className="form-book__avatar">
                <input type="file"
                    id={name}
                    name={name}
                    onChange={e => this.handleFile(e.target.files)}
                />
                <div className="form-book__avatar-img">
                    <img src="images/icons/user/upload.svg" alt=""/>
                </div>
                <div className="form-book__avatar-text">
                    <span>{label}</span>
                    <div className="form-book__avatar-fileName">
                        {labels && labels.map((item, key) => <span key={key}>{item}</span>)}
                    </div>
                </div>
            </label>
        )
    }
}

InputFile.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default InputFile;
