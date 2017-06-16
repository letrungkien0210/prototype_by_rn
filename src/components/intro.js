import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';

export default  class Intro extends React.Component{
  static navigationOptions = {
    title: 'Intro',
    header: null,
  };
  render(){
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../images/logo.png')}
          />
        </View>
        <View style={styles.buttonsGroup}>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => navigate('Login')}>
            <Text style={styles.buttonText}>Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.messageContainer}>
          <Text style={styles.message}>By signing in, you agree to our T&Cs and Privacy Policy</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  logoContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo:{
    width: 100,
    resizeMode: 'contain'
  },
  buttonsGroup: {
    paddingTop: 50,
    paddingLeft: 50,
    paddingBottom: 10,
    paddingRight: 50,
  },
  buttonContainer:{
    backgroundColor: '#2980b9',
    paddingVertical: 10,
    marginTop: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF'
  },
  messageContainer:{
    padding: 10,
    alignItems: 'center',
  },
  message: {
    width:300,
    textAlign: 'center'
  }
});