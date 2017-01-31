import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAcxIRcSAmBdafuXrch2imRnDtQIZzHL5Q',
      authDomain: 'reactnative-auth-3f18f.firebaseapp.com',
      databaseURL: 'https://reactnative-auth-3f18f.firebaseio.com',
      storageBucket: 'reactnative-auth-3f18f.appspot.com',
      messagingSenderId: '293506336045'
    });
  }
  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    );
  }
}

export default App;
