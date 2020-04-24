import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Greeting from './Greeting'

class App extends Component {
  constructor(){
    super()
    this.state = {
      greeting : "Welcome to Ract Native"
    }
  }
  render(){
    return (
      <View style={styles.container}>
        <Greeting text={this.state.greeting}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
