import React, { Component } from 'react';
import { convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToMarkdown from 'draftjs-to-markdown';
import './Editor.css';

class EditorConvertToMarkdown extends Component {
  state = {
    editorState: undefined,
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
    const markdown = editorState && draftToMarkdown(convertToRaw(editorState.getCurrentContent()));
    this.props.onEditorTextUpdate(markdown);
  };

  render() {
    const { editorState } = this.state;
    return (
      <div>
        <Editor
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
        />
      </div>
    );
  }
}
export default EditorConvertToMarkdown;