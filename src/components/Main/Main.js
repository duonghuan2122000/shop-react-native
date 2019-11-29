import React from 'react';
import { Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Shop from './Shop/Shop';
import Menu from './Shop/Menu';

const { width } = Dimensions.get('window');

export default createDrawerNavigator({
  Shop: Shop
}, {
  contentComponent: Menu,
  drawerWidth: width / 2
});
