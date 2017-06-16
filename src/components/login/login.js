import React from 'react';
import { StyleSheet, View, Image, KeyboardAvoidingView } from 'react-native';
import LoginForm from './loginForm';

export default class Login extends React.Component{
  static navigationOptions = {
    title: 'Login',
  };
  render(){
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View>
          <LoginForm/>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});