import React, { Component } from 'react';
import EditorJs from 'react-editor-js';
import { EditorConfigDefault, EditorConfigCharts, EditorConfigReview } from './config';

class TextEditor extends Component {
    config = {
        '0': EditorConfigCharts,
        '1': EditorConfigReview,
        '2': EditorConfigDefault
    };

    handleSave = async() => {
        await this.editorInstance.save()
            .then(outputData => {
                if (outputData.blocks.length) {
                    this.props.onChange(this.props.name, outputData.blocks);
                }
            })
            .catch(err => console.log(err));
    };

    render() {
        const required = { value: true, message: 'Обязательное поле!' };
        const { label, name, placeholder, register, errors, getValues } = this.props;
        const formValues = getValues();
        const viewType = formValues.viewType || '2';

        return (
            <div className="editor">
                <span className="editor__title">
                    {label}
                </span>
                <EditorJs
                    enableReInitialize={true}
                    instanceRef={ instance => this.editorInstance = instance }
                    ref={register({name, type: 'custom'}, {required})}
                    placeholder={placeholder}
                    onChange={this.handleSave}
                    tools={this.config[viewType]}
                />
                <div className="form__group-error">
                    { errors[name] && errors[name].message }
                </div>
            </div>
        );
    }
}

export default TextEditor;



