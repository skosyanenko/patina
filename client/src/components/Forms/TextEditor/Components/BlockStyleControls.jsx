import React from 'react';
import StyleButton from './StyleButton';

const BLOCK_TYPES = [
    {label: 'Заголовок', style: 'header-one'},
    {label: 'Подзаголовок', style: 'header-two'},
    {label: 'Цитата', style: 'blockquote'},
    {label: 'Основная мысль', style: 'custom'},
    {label: 'Список', style: 'unordered-list-item'},
    {label: 'Нумерованый список', style: 'ordered-list-item'}
];

const BlockStyleControls = (props) => {
    const {editorState} = props;
    const selection = editorState.getSelection();
    const blockType = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();

    console.log(blockType);

    return (
        <div className="RichEditor-controls">
            {BLOCK_TYPES.map((type) =>
                <StyleButton
                    key={type.label}
                    active={type.style === blockType}
                    label={type.label}
                    onToggle={props.onToggle}
                    style={type.style}
                />
            )}
        </div>
    );
};

export default BlockStyleControls;