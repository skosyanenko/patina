import React, {Component} from 'react';
import EditorJs from 'react-editor-js';
import {EditorConfig_1, EditorConfig_2, EditorConfig_3} from './config';

class TextEditor extends Component {

    configSwitcher = () => {
        switch (this.props.typeView) {
            case 'view_1':
                return EditorConfig_2;
            case 'view_2':
                return EditorConfig_3;
            default:
                return EditorConfig_1;
        }
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
        const required = {value: true, message: 'Вы не сохранили текст!'};
        const {label, name, placeholder, register, errors} = this.props;
        return (
            <div className="editor">
                <span className="editor__title">
                    {label}
                </span>
                <EditorJs
                    enableReInitialize={true}
                    instanceRef={instance => this.editorInstance = instance}
                    ref={register({name, type: 'custom'}, {required})}
                    placeholder={placeholder}
                    onChange={this.handleSave}
                    tools={this.configSwitcher()}
                />
                <div className="form__group-error">
                    {errors[name] && errors[name].message}
                </div>
            </div>

        );
    }
}

export default TextEditor;



