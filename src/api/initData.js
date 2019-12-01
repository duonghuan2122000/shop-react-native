import global from './global';
import {
    fetchInitDataBegin,
    fetchInitDataSuccess,
    fetchInitDataFailure
} from '../store/actions/initData';
import handleErrors from './handleErrors';
export default () => {
    return dispatch => {
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
}