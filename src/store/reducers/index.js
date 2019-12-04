import {combineReducers} from 'redux';
import initData from './initData';
import user from './user';
export default combineReducers({
    initData,
    user
});