import React, { Component } from 'react';
import { StatusBar, ActivityIndicator, SafeAreaView, Alert, BackHandler } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './Main/Main';
import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import OrderHistory from './OrderHistory/OrderHistory';

import { initData, initUser } from '../api/initData';
import { connect } from 'react-redux';

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
  initialRouteName: 'Main'
});

class App extends Component {
  static router = AppNavigator.router;
  constructor(props) {
    super(props)

    this.state = {

    }
    this.alertErr = this.alertErr.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(initData());
    this.props.dispatch(initUser());
  }
  alertErr() {
    Alert.alert(
      'Notification',
      'Maybe has issues when running.',
      [
        { text: 'OK', onPress: () => BackHandler.exitApp() },
      ],
      { cancelable: false },
    );
  }
  render() {
    const { navigation, loading, errFetchData } = this.props;
    if (errFetchData) {
      this.alertErr();
    }
    const loadingJSX = (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator
          size="large"
          color="#00ff00"
        />
      </SafeAreaView>
    );
    const loadedJSX = <AppNavigator navigation={navigation} />
    const mainJSX = loading ? loadingJSX : loadedJSX;
    return mainJSX;
  }
}

export default createAppContainer(connect(({ initData }) => {
  return {
    loading: initData.loading,
    errFetchData: initData.err
  }
})(App));
