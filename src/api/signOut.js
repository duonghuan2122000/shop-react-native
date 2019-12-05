import { removeUserStorage } from './userStorage';
import { setUser } from '../store/actions/user';

export default () => dispatch => {
    return removeUserStorage()
        .then(dispatch(setUser(null, null)));
}