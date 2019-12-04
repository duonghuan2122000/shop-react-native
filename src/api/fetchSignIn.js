import global from './global';
import handleErrors from './handleErrors';
import { setUser } from '../store/actions/user';
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
        .then(json => dispatch(setUser(json.token, json.user)))
);