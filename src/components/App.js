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
  initialRouteName: 'OrderHistory'
});

class App extends Component {
  static router = AppNavigator.router;
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), 1000);
  }

  render() {
    const { navigation } = this.props;
    const loading = (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator
          size="large"
          color="#00ff00"
        />
        <Text style={{marginTop: 10}}>Sora</Text>
      </SafeAreaView>
    );
    const loaded = <AppNavigator navigation={navigation} />;
    const mainJSX = this.state.isLoading ? loading : loaded;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        {mainJSX}
      </SafeAreaView>
    );
  }
}

export default createAppContainer(App);
