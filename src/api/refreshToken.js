import global from './global';
import handleErrors from './handleErrors';
import { setUserStorage } from '../api/userStorage';
import { refreshToken } from '../store/actions/user';
export default (token) => dispatch => {
    return fetch(`${global.baseUrl}/refresh_token.php`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ token })
    })
        .then(handleErrors)
        .then(res => res.text())
        .then(token => {
            dispatch(refreshToken(token));
            setUserStorage(token);
        });
}