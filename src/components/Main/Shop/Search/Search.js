import {createStackNavigator} from 'react-navigation-stack';

import SearchView from './SearchView';
import ProductDetail from '../Home/ProductDetail/ProductDetail';

export default createStackNavigator({
    SearchView: {
        screen: SearchView
    },
    ProductDetail: {
        screen: ProductDetail
    }
}, {
    defaultNavigationOptions: {
        header: null
    },
    initialRouteName: 'SearchView'
});