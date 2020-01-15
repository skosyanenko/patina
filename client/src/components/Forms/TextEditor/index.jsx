import React, {Component} from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
import BlockStyleControls from './Components/BlockStyleControls';
import InlineStyleControls from './Components/InlineStyleControls';


class TextEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createEmpty()};
        this.focus = () => this.refs.editor.focus();
        this.onChange = (editorState) => this.setState({editorState});

        this.handleKeyCommand = (command) => this._handleKeyCommand(command);
        this.onTab = (e) => this._onTab(e);
        this.toggleBlockType = (type) => this._toggleBlockType(type);
        this.toggleInlineStyle = (style) => this._toggleInlineStyle(style);
    }

    _handleKeyCommand(command) {
        const {editorState} = this.state;
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return true;
        }
        return false;
    }

    _onTab(e) {
        const maxDepth = 4;
        this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
    }

    _toggleBlockType(blockType) {
        this.onChange(
            RichUtils.toggleBlockType(
                this.state.editorState,
                blockType
            )
        );
    }

    _toggleInlineStyle(inlineStyle) {
        this.onChange(
            RichUtils.toggleInlineStyle(
                this.state.editorState,
                inlineStyle
            )
        );
    }

    getBlockStyle = (block) => {
        switch (block.getType()) {
            case 'blockquote': return 'RichEditor-blockquote';
            case 'custom': return 'RichEditor-custom';
            default: return null;
        }
    };

    render() {
        const {label} = this.props;
        const {editorState} = this.state;
        let className = 'RichEditor-editor';
        const contentState = editorState.getCurrentContent();
        if (!contentState.hasText()) {
            if (contentState.getBlockMap().first().getType() !== 'unstyled') {
                className += ' RichEditor-hidePlaceholder';
            }
        }

        return (
            <>
                <div className="RichEditor-title">{label}</div>
                <div className="RichEditor-root">
                    <BlockStyleControls
                        editorState={editorState}
                        onToggle={this.toggleBlockType}
                    />
                    <InlineStyleControls
                        editorState={editorState}
                        onToggle={this.toggleInlineStyle}
                    />
                    <div className={className} onClick={this.focus}>
                        <Editor
                            blockStyleFn={this.getBlockStyle}
                            editorState={editorState}
                            handleKeyCommand={this.handleKeyCommand}
                            onChange={this.onChange}
                            onTab={this.onTab}
                            placeholder="Текст рецензии"
                            ref="editor"
                            spellCheck={true}
                        />
                    </div>
                </div>
            </>
        );
    }
}

export default TextEditor;



