import { CartActions, CartActionTypes, CartState } from "./cart.types";
import { addItemToCartItems } from './cart.utils'

const initialState: CartState = {
    isHidden: true,
    cartItems: []
};

const cartReducer = (state: CartState = initialState, action: CartActions) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_SHOW_CART:
            return {
                ...state,
                isHidden: !state.isHidden
            };
        case CartActionTypes.ADD_ITEM_TO_CART:
            return {
                ...state,
                cartItems: addItemToCartItems(state.cartItems, action.payload)
            }

        default:
            return state;
    }
};

export default cartReducer;
