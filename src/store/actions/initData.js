export const INIT_DATA_BEGIN = 'INIT_DATA_BEGIN';
export const INIT_DATA_SUCCESS = 'INIT_DATA_SUCCESS';
export const INIT_DATA_FAILURE = 'INIT_DATA_FAILURE';

export const fetchInitDataBegin = () => ({
    type: INIT_DATA_BEGIN
});

export const fetchInitDataSuccess = (types, topProducts) => ({
    type: INIT_DATA_SUCCESS,
    payload: {
        types, topProducts
    }
});

export const fetchInitDataFailure = (err) => ({
    type: INIT_DATA_FAILURE,
    payload: {
        err
    }
});