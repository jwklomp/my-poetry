import React, { Component } from 'react';
import showdown from 'showdown';

const converter = new showdown.Converter();

const Poem = (props) => {

    const createInnerHtml= () => {
        return {__html: props.poem.body && converter.makeHtml(props.poem.body)};
    };

    return (
        <li key={props.poem.id}>
        <h3>{props.poem.title}</h3>
        <p>written by: {props.poem.user}
          {props.poem.user === props.user.displayName || props.poem.user === props.user.email ?
            <button onClick={() => this.removeItem(props.poem.id)}>Remove Item</button> : null}
        </p>

        <div dangerouslySetInnerHTML={createInnerHtml()} />
 
      </li>
    );
}
export default Poem;