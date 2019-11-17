import { CartActions, CartActionTypes, CartState } from "./cart.types";
import { addItemToCartItems, removeItemFromCartItems } from './cart.utils'

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
        case CartActionTypes.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: removeItemFromCartItems(state.cartItems, action.payload)
            }
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.id !== action.payload.id)
            }

        default:
            return state;
    }
};

export default cartReducer;
