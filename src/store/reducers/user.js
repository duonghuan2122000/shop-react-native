import {SET_USER, SET_USER_FAILURE} from '../actions/user';

const initialState = {
    user: null,
    token: null
};

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
        default: 
            return state;
    }
}