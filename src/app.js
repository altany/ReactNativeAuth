import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

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
        <Text>My app</Text>
      </View>
    );
  }
}

export default App;
