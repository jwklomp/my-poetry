import React, { Component } from 'react';
import firebase, { auth, provider } from '../firebase.js';
const Authenticate = (props) => {
    // todo to a service?
    const logout = () => {
        auth.signOut()
        .then(() => {
          props.onLogoutFunction
        });
    };
    const login = () => {
        auth.signInWithPopup(provider) 
          .then((result) => {
            props.onLoginFunction(result.user);
        });
    };
    return (
        <div>
            {props.user ?
                <button onClick={logout}>Logout</button>                
                :
                <button onClick={login}>Log In</button>              
            }
        </div>
    );
}
export default Authenticate;