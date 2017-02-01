import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  state = { loggedIn: false };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAcxIRcSAmBdafuXrch2imRnDtQIZzHL5Q',
      authDomain: 'reactnative-auth-3f18f.firebaseapp.com',
      databaseURL: 'https://reactnative-auth-3f18f.firebaseio.com',
      storageBucket: 'reactnative-auth-3f18f.appspot.com',
      messagingSenderId: '293506336045'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {

    if (this.state.loggedIn) {
      return (
        <CardSection>
          <Button>Logout</Button>
        </CardSection>
      );
    }
    return <LoginForm />;
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
