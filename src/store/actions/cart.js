export const ADD_CART = 'ADD_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const addCart = (product) => {
    return {
        type: ADD_CART,
        payload: {
            product: product,
            quantity: 1
        }
    }
}

export const updateCart = (cart) => {
    return {
        type: UPDATE_CART,
        payload: {
            cart
        }
    }
}