import React, { Component } from 'react';
import { StatusBar, ActivityIndicator, SafeAreaView, Alert, BackHandler, AppState } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './Main/Main';
import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import OrderHistory from './OrderHistory/OrderHistory';

import { initData, initUser, initCart } from '../api/initData';
import { connect } from 'react-redux';
import { setCartStorage } from '../api/cartStorage';
import refreshToken from '../api/refreshToken';

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
    this._handleAppStateChange = this._handleAppStateChange.bind(this);
  }

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
    this.props.dispatch(initData());
    this.props.dispatch(initUser());
    this.props.dispatch(initCart());
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange(currentAppState) {
    if (currentAppState === 'background') {
      const { cart, token, dispatch } = this.props;
      setCartStorage(cart);
      dispatch(refreshToken(token));
    }
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

export default createAppContainer(connect(({ initData, user, cart }) => {
  return {
    loading: initData.loading,
    errFetchData: initData.err,
    token: user.token,
    cart
  }
})(App));
