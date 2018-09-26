/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';
import TouchID from 'react-native-touch-id'

const optionalConfigObject = {
  title: "Authentication Required", // Android
  color: "#e00606", // Android
  sensorDescription: "Touch sensor", // Android
  cancelText: "Cancel", // Android
  fallbackLabel: "Show Passcode", // iOS (if empty, then label is hidden)
  unifiedErrors: false // use unified error messages (default false)
}

export default class App extends Component<Props> {
  _onPressButton() {
    TouchID.authenticate('to demo this react-native component', optionalConfigObject).then(success => {
      Alert.alert('Authenticated Successfully');
    }).catch(error => {
      Alert.alert('Authentication Failed');
    });
  }
  render() {
    return (<View>
      <TouchableOpacity onPress={this._onPressButton}>
        <Text>TouchID</Text>
      </TouchableOpacity>
    </View>);
  }
}
