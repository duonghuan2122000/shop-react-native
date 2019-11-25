import React from 'react';
import {Dimensions} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';

import Shop from './Shop/Shop';
import Menu from './Shop/Menu'; 

const {width} = Dimensions.get('window');

export default createDrawerNavigator({
  Shop: Shop
}, {
  contentComponent: Menu,
  drawerWidth: width / 2
});

// export default (props) => {
//   const {navigation} = props;
//   return (
//     <View>
//       <TouchableOpacity onPress={() => navigation.push('Authentication')}>
//         <Text>Go to Authentication</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }
