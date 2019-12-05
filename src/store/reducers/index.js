import {combineReducers} from 'redux';
import initData from './initData';
import user from './user';
import cart from './cart';
export default combineReducers({
    initData,
    user,
    cart
});