export const SET_USER = 'SET_USER';
export const REFRESH_TOKEN = 'REFRESH_TOKEN';
export const setUser = (token, user) => {
    return {
        type: SET_USER,
        payload: { token, user }
    }
}
export const refreshToken = (token) => {
    return {
        type: REFRESH_TOKEN,
        payload: {
            token
        }
    }
}