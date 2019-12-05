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
import IconWithBadge from './IconWithBadge';
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
        navigationOptions: ({navigation, screenProps}) => {
            return {
                tabBarIcon: <IconWithBadge badgeCount={screenProps.quantityCart} icon={icCart} />
            }
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
    render() {
        const { navigation, quantityCart } = this.props;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Header navigation={navigation} />
                <SafeAreaView style={{ flex: 10 }}>
                    <ShopNavigator navigation={navigation} screenProps={{ quantityCart }} />
                </SafeAreaView>
            </SafeAreaView>
        );
    }
}

export default connect(({ cart }) => {
    return {
        quantityCart: cart.length
    }
})(Shop);