# Reactjs application for reading an writing poetry using Firebase as a backend

## Before building

``` bash
# file src/firebase.js was omitted from version control. This file must be created manually.
# It should contain the following lines with the a.o. Firebase settings
import firebase from 'firebase'
const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
```

## Build Setup

``` bash
# install dependencies
npm install

# start
npm start

# test
npm test

# run build
npm run build

# run e2e tests
npm run eject
```