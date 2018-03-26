import React, { Component } from 'react';
import { View, Platform } from 'react-native';

import { STATUS_BAR_HEIGHT } from '../constants/header';

class MainScreen extends Component {
  static navigationOptions = () => ({
    title: 'Saved Cards',
    headerStyle: {
      height: Platform.OS === 'android' ? 54 + STATUS_BAR_HEIGHT : 54,
      backgroundColor: '#2bbbad',
    },
    headerTitleStyle: {
      color: 'white',
      fontWeight: 'bold',
      marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
    },
  });

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#eee',
        }}
      />
    );
  }
}

export default MainScreen;
