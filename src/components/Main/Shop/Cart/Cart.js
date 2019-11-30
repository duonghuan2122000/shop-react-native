import {createStackNavigator} from 'react-navigation-stack';

import CartView from './CartView';
import ProductDetail from '../Home/ProductDetail/ProductDetail';

export default createStackNavigator({
    CartView: {
        screen: CartView
    },
    ProductDetail: {
        screen: ProductDetail
    }
}, {
    defaultNavigationOptions: {
        header: null
    },
    initialRouteName: 'CartView'
});