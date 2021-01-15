import React from 'react';
import {styleSheet, Text, View } from 'react-native';
import AppContainer from './navigation';
export default class App extends React.Component {

  render() {
    return <AppContainer /> 
    (
        <View style={styleSheet.signup}>
            <text>testing</text>
        </View>
    );
}



}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#36485f',
    paddingLeft: 60,
    paddingRight: 60,
      
  },
});
