import {createStackNavigator} from 'react-navigation-stack';

import HomeView from './HomeView';
import ListProduct from './ListProduct/ListProduct';
import ProductDetail from './ProductDetail/ProductDetail';

export default createStackNavigator({
    HomeView: {
        screen: HomeView
    },
    ListProduct: {
        screen: ListProduct
    },
    ProductDetail: {
        screen: ProductDetail
    }
}, {
    defaultNavigationOptions: {
        header: null
    },
    initialRouteName: 'ProductDetail'
});