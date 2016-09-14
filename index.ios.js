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
  View,
  Image
} from 'react-native';

var Main = require('./Component/Main/VDMain');

class VDBuy extends Component {
  render() {
    return <Main />;
  }
}



AppRegistry.registerComponent('VDBuy', () => VDBuy);
