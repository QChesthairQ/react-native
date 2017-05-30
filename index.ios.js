// Index.ios.js ---- place code in here for IOS


// Import a library to help create a component
import React from 'react';
import { View, Text, AppRegistry } from 'react-native';
import Header from './src/component/Header';
import AlbumList from './src/component/AlbumList';

// Create a component
const App = () => (
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
);

// Render it to the devices
AppRegistry.registerComponent('reactproject', () => App);
