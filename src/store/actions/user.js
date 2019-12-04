export const SET_USER = 'SET_USER';
export const setUser = (token, user) => {
    return {
        type: SET_USER,
        payload: { token, user }
    }
}