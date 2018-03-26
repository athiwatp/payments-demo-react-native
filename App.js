import React from 'react';
import { StackNavigator } from 'react-navigation';

import Main from './screens/Main';

export default class App extends React.Component {
  render() {
    const MainNavigator = StackNavigator({
      Main: {
        screen: Main
      }
    });

    return (
      <MainNavigator />
    );
  }
}
