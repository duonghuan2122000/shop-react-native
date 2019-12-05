import global from './global';
import handleErrors from './handleErrors';
import { setUser } from '../store/actions/user';
import { setUserStorage } from './userStorage';
export default (email, password) => dispatch => (
    fetch(`${global.baseUrl}/login.php`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'Application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
            setUserStorage(json.token);
            dispatch(setUser(json.token, json.user));
        })
);