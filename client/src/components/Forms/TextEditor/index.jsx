import React from 'react';
import dynamic from 'next/dynamic';
import MarkdownIt from 'markdown-it';

const TextEditor = dynamic( {
    modules: () => ({
        mdEditorModule: import('react-markdown-editor-lite'),
    }),
    render: (props, { mdEditorModule }) => {
        const MdEditor = mdEditorModule;
        const mdParser = new MarkdownIt();

        const config = {
            '0': ['header', 'fonts', 'clear', 'quote'],
            '1': ['header', 'fonts', 'clear', 'quote', 'image', 'link'],
            '2': ['header', 'fonts', 'clear']
        };

        const required = { value: true, message: 'Обязательное поле!' };
        const { label, name, register, errors, getValues } = props;
        const formValues = getValues();
        const viewType = formValues.viewType || '2';

        const handleEditorChange = ({ text }) => {
            const { onChange, name } = props;
            onChange(name, text);
        };

        const onCustomImageUpload = async () => {
            return {url: 'Ссылка на изображение', name: 'Название'};
        };

        return (
            <div className="editor">
                <span className="editor__title">
                    {label}
                </span>
                <MdEditor
                    value=''
                    style={{height: '500px', width: '100%'}}
                    plugins={config[viewType]}
                    renderHTML={(text) => mdParser.render(text)}
                    ref={register({name, type: 'custom'}, {required})}
                    config={{
                        view: {
                            menu: true,
                            md: true,
                            html: true,
                            fullScreen: false,
                            hideMenu: false
                        }
                    }}
                    onCustomImageUpload={onCustomImageUpload}
                    onChange={handleEditorChange}
                />
                <div className="form__group-error">
                    { errors[name] && errors[name].message }
                </div>
            </div>
        );
    },
    ssr: false
});

export default TextEditor;


