import { ADD_CART, UPDATE_CART } from '../actions/cart';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_CART: {
            const index = state.findIndex(e => e.product.id === action.payload.product.id);
            if (index != -1) {
                state[index].quantity++;
                return state;
            }
            return [...state, { product: action.payload.product, quantity: 1 }];
        }
        case UPDATE_CART:
            return [...action.payload.cart];
        default:
            return state;
    }
} 