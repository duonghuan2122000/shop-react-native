import React, { Component } from 'react';
import { Image, SafeAreaView, Alert, BackHandler, ActivityIndicator } from 'react-native';

import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from './Home/Home';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Contact from './Contact/Contact';
import Header from './Header';

import icHome from '../../../assets/icons/ic_home.png';
import icCart from '../../../assets/icons/ic_cart.png';
import icSearch from '../../../assets/icons/ic_search.png';
import icContact from '../../../assets/icons/ic_contact.png';

import initData from '../../../api/initData';
import { connect } from 'react-redux';

const ShopNavigator = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarIcon: <Image source={icHome} style={{ height: 24, width: 24 }} />
        }
    },
    Cart: {
        screen: Cart,
        navigationOptions: {
            tabBarIcon: <Image source={icCart} style={{ height: 24, width: 24 }} />
        }
    },
    Search: {
        screen: Search,
        navigationOptions: {
            tabBarIcon: <Image source={icSearch} style={{ height: 24, width: 24 }} />
        }
    },
    Contact: {
        screen: Contact,
        navigationOptions: {
            tabBarIcon: <Image source={icContact} style={{ height: 24, width: 24 }} />
        }
    }
}, {
    defaultNavigationOptions: {
        header: null
    },
    initialRouteName: 'Home'
});

class Shop extends Component {
    static router = ShopNavigator.router;

    constructor(props) {
        super(props)

        this.state = {
        }
        this.alertErr = this.alertErr.bind(this);
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

    componentDidMount() {
        this.props.dispatch(initData());
    }


    render() {
        const { navigation, loading, errFetchData } = this.props;
        if(errFetchData){
            this.alertErr();
        }
        const loadingJSX = (
            <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
                <ActivityIndicator 
                    size="large"
                    color="#00ff00"
                />
            </SafeAreaView>
        );

        const loadedJSX = (
            <SafeAreaView style={{ flex: 1 }}>
                <Header navigation={navigation} />
                <SafeAreaView style={{ flex: 10 }}>
                    <ShopNavigator navigation={navigation} />
                </SafeAreaView>
            </SafeAreaView>
        );

        const mainJSX = loading ? loadingJSX : loadedJSX;
        return mainJSX;
    }
}

export default connect(({initData}) => ({
    loading: initData.loading,
    errFetchData: initData.err
}))(Shop);