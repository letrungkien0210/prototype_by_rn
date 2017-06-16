import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';
import ValidationComponent from 'react-native-form-validator';

export default class LoginForm extends ValidationComponent{

  constructor(props){
    super(props);

    this.state={
      email: '',
      password: ''
    }
  }

  _login(){
    this.validate({
      email: {
        required: true,
        email:true,
      },
      password: {
      }
    })
  }

  render(){
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <View>
          <TextInput
            placeholder="Enter email"
            placeholderTextColor='white'
            returnKeyType="next"
            // onSubmitEditing={ () => this.passwordInput.focus() }
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            value={this.state.email}
            onChangeText={(username) => this.setState({email})}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor='white'
            returnKeyType="go"
            secureTextEntry
            style={styles.input}
            // ref={(input) => this.passwordInput = input }
            value={this.state.password}
            onChangeText={(password) => this.setState({password})}
          />
        </View>
        <View style={{ alignItems: 'center', padding: 10}}>
          <Text>Forgot Password?</Text>
        </View>
        <TouchableOpacity style={styles.buttonContainer} onPress={this._login()}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
        <Text>
          {this.getErrorMessages()}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 100,
  },
  input: {
    height: 40,
    backgroundColor: 'blue',
    marginBottom: 20,
    paddingHorizontal: 10,
    color: 'white'
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 10
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF'
  }
})