import {SET_USER, REFRESH_TOKEN} from '../actions/user';

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
        case REFRESH_TOKEN:
            return {
                ...state,
                token: action.payload.token
            }
        default: 
            return state;
    }
}