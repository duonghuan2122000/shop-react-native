import React, { Component } from 'react';
import { StatusBar, ActivityIndicator, SafeAreaView, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './Main/Main';
import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import OrderHistory from './OrderHistory/OrderHistory';

StatusBar.setHidden(true);

const AppNavigator = createStackNavigator({
  Main: {
    screen: Main
  },
  Authentication: {
    screen: Authentication
  },
  ChangeInfo: {
    screen: ChangeInfo
  },
  OrderHistory: {
    screen: OrderHistory
  }
}, {
  defaultNavigationOptions: {
    header: null
  },
  initialRouteName: 'Authentication'
});

export default createAppContainer(AppNavigator);
