import AsyncStorage from '@react-native-community/async-storage';
export const getUserStorage = () => (
    AsyncStorage.getItem('@user')
        .then(text => {
            if (text !== null) {
                return text;
            }
        })
)

export const setUserStorage = (token) => {
    AsyncStorage.setItem('@user', token);
}

export const removeUserStorage = () => (
    AsyncStorage.removeItem('@user')
);