import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './component/common';
import LoginForm from './component/LoginForm';

class App extends Component {

  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBat9PnhmsfDYcd4gFY8-QcagNRcrRJ0mI',
      authDomain: 'cool-authentication.firebaseapp.com',
      databaseURL: 'https://cool-authentication.firebaseio.com',
      projectId: 'cool-authentication',
      storageBucket: 'cool-authentication.appspot.com',
      messagingSenderId: '899638847487'
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
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button label="Log Out" onPress={() => firebase.auth().signOut()} />
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
