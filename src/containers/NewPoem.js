import React, { Component } from 'react';
import firebase, { auth, provider } from '../firebase.js';

import EditorConvertToMarkdown from './EditorConvertToMarkdown.js'
class NewPoem extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            body: '',
            user: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit = (e) => {
        e.preventDefault();

        const poemsRef = firebase.database().ref('poems');

        const poem = {
          title: this.state.title,
          body: this.state.body,
          user: this.props.user.displayName || this.props.user.email
        }
        console.log(poem);
        poemsRef.push(poem);

        this.setState({
          title: '',
          body: '',
          username: ''
        });
    };

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    onEditorTextUpdate = (bodyText) => {
        this.setState({body: bodyText});
    };

    render() {
        return (
        <div className='add-item'>
        <h1>Enter a new poem</h1>
            <form onSubmit={this.handleSubmit}>
              <input type="text" name="username" placeholder="What's your name?" value={this.props.user ? (this.props.user.displayName || this.props.user.email) : null } />
              <input type="text" name="title" placeholder="Enter the title" onChange={this.handleChange} />
              <EditorConvertToMarkdown onEditorTextUpdate = {this.onEditorTextUpdate}/>        
              <button>Add Poem</button>
            </form>
        </div>
        );
      }

}
export default NewPoem;