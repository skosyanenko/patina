import React, {Component} from 'react';
import EditorJs from 'react-editor-js';
import {EditorConfig} from "./config";

class TextEditor extends Component {

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
        const required = {value: true, message: 'Вы не сохранили текст!'};
        const {label, name, placeholder, register, errors} = this.props;
        return (
            <div className="editor">
                <span className="editor__title">
                    {label}
                </span>
                <EditorJs
                    instanceRef={instance => this.editorInstance = instance}
                    ref={register({name, type: 'custom'}, {required})}
                    placeholder={placeholder}
                    tools={EditorConfig}
                />
                {errors[name] && errors[name].message}
                <button type="button" className="button button-white"
                        onClick={this.handleSave}
                >
                    Сохранить текст
                </button>
            </div>

        );
    }
}

export default TextEditor;



