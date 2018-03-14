import React, { Component } from 'react';
import firebase, { auth, provider } from '../firebase.js';

import Poem from '../components/Poem.js'
class PoemList extends Component {
  constructor() {
    super();
    this.state = {
      poems: [],
    };
  } 
  componentDidMount() {
    this.getPoems(this.onGetPoemsFunction);
 }
    // todo to a service?
    getPoems = (onGetPoemsFunction) =>  {
        const poemsRef = firebase.database().ref('poems');
        poemsRef.on('value', (snapshot) => {
          let poems = snapshot.val();
          let newState = [];
          for (let poem in poems) {
            newState.push({
              id: poem,
              title: poems[poem].title,
              user: poems[poem].user,
              body: poems[poem].body
            });
          }
          this.setState({
            poems: newState
          });
        });
    }

  render() {
    return (
      <div className='display-item'>
      <div className="wrapper">
        <ul>
          {this.state.poems.map((item) => {
            return (
             <Poem poem={item} user={this.props.user}/>
            )
          })}
        </ul>
      </div>
    </div>
    );
  }
}
export default PoemList;