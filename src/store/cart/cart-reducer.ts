import { CartActions, CartActionTypes, CartState, Item } from "./cart.types";
import { addItemToCartItems, removeItemFromCartItems } from './cart.utils';

const initialState: CartState = {
    isHidden: true,
    cartItems: []
};

const cartReducer = (state: CartState = initialState, action: CartActionTypes) => {
    switch (action.type) {
        case CartActions.TOGGLE_SHOW_CART:
            return {
                ...state,
                isHidden: !state.isHidden
            };
        case CartActions.ADD_ITEM_TO_CART:
            return {
                ...state,
                cartItems: addItemToCartItems(state.cartItems, action.payload)
            };
        case CartActions.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: removeItemFromCartItems(state.cartItems, action.payload)
            };
        case CartActions.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((item: Item) => item.id !== action.payload.id)
            };
        case CartActions.CLEAR_CART:
            return {
                ...state,
                cartItems: []
            };
        default:
            return state;
    }
};

export default cartReducer;
