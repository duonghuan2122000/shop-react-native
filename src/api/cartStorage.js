import AsyncStorage from '@react-native-community/async-storage';
export const getCartStorage = () => (
    AsyncStorage.getItem('@cart')
        .then(text => {
            if (text !== null) {
                const { cart } = JSON.parse(text);
                return cart;
            }
        })
)

export const setCartStorage = (cart) => {
    AsyncStorage.setItem('@cart', JSON.stringify({ cart }));
}

export const removeCartStorage = () => (
    AsyncStorage.removeItem('@cart')
);