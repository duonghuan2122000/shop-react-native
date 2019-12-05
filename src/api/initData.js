import global from './global';
import {
    fetchInitDataBegin,
    fetchInitDataSuccess,
    fetchInitDataFailure
} from '../store/actions/initData';
import handleErrors from './handleErrors';
import { getUserStorage } from './userStorage';
import { setUser } from '../store/actions/user';
export const initData = () => dispatch => {
    dispatch(fetchInitDataBegin());
    return fetch(`${global.baseUrl}`, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'Application/json'
        }
    })
        .then(handleErrors)
        .then(res => res.json())
        .then(json => dispatch(fetchInitDataSuccess(json.type, json.product)))
        .catch(err => dispatch(fetchInitDataFailure(err)));
}

export const initUser = () => dispatch => {
    getUserStorage()
        .then(token => {
            fetch(`${global.baseUrl}/check_login.php`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'Application/json'
                },
                body: JSON.stringify({ token })
            })
                .then(handleErrors)
                .then(res => res.json())
                .then(json => dispatch(setUser(json.token, json.user)));
        });
}