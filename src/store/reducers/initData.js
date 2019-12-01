import {
    INIT_DATA_BEGIN,
    INIT_DATA_SUCCESS,
    INIT_DATA_FAILURE
} from '../actions/initData';

const initialState = {
    loading: false,
    types: [],
    topProducts: [],
    err: null
};

export default (state = initialState, action) => {
    switch(action.type){
        case INIT_DATA_BEGIN: 
            return {
                ...state,
                loading: true,
                err: null
            }
        case INIT_DATA_SUCCESS: 
            return {
                ...state,
                loading: false,
                types: action.payload.types,
                topProducts: action.payload.topProducts
            }
        case INIT_DATA_FAILURE: 
            return {
                ...state,
                loading: false,
                types: [],
                topProducts: [],
                err: action.payload.err
            }
        default:
            return state;
    }
}