import React, { Component } from 'react';
import './App.css';
import firebase, { auth, provider } from '../firebase.js';

import Authenticate from '../components/Authenticate.js'
import UserProfile from '../components/UserProfile.js'
import PoemList from '../containers/PoemList.js'
import NewPoem from '../containers/NewPoem.js'

class App extends Component {

  constructor() {
    super();
    this.state = {
      user: null
    }
  }
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } 
    });
  }

  onGetPoemsFunction = (fetchedPoems) => {
    this.setState({
      poems: fetchedPoems
    });
  }

  onLogoutFunction = () => {
      this.setState({
        user: null
      });
  }

  onLoginFunction = (loggedInUser) =>  {
    this.setState({
      user: loggedInUser
    });
  }

  render() {
    return (
    <div className='app'>
      <header>
        <div className="wrapper">
          <h1>My Poetry</h1>
        </div>
      </header>
      <Authenticate user={this.state.user} onLoginFunction={this.onLoginFunction} onLogoutFunction={this.onLogoutFunction}/>
      {this.state.user ? 
        <UserProfile user={this.state.user}/>
        :         
        <div className='wrapper'>
          <p>Log in to read and write poems.</p>
        </div> 
      }
      <PoemList user={this.state.user}/>
      <NewPoem user={this.state.user}/>
    </div>
    );
  }
}
export default App;