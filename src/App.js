/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Login from './components/login/login';
import Intro from './components/intro';
import { StackNavigator } from 'react-navigation';

export default class sameview_mobile extends Component {
  // static navigatorOptions = {
  //   title: 'Intro'
  // };
  render() {
    return (
      <Intro/>
    );
  }
}

const App = StackNavigator({
  Intro: { screen: Intro, headerMode: 'screen'},
  Login: { screen: Login},
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('sameview_mobile', () => App);
