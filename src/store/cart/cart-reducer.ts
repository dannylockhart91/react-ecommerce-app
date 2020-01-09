import {UserActionTypes} from '../user/user.types';
import { CartActions, CartActionTypes, CartState, Item } from "./cart.types";
import { addItemToCartItems, removeItemFromCartItems } from './cart.utils';
import { UserActions } from "../user/user.types";

const initialState: CartState = {
    isHidden: true,
    cartItems: []
};

const cartReducer = (state: CartState = initialState, action: CartActionTypes | UserActionTypes) => {
    switch (action.type) {
        case UserActions.SIGN_OUT_SUCCESS:
            return {
                ...state,
                isHidden: true
            };
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
        case CartActions.SET_CART_FROM_FIREBASE:
            return {
                ...state,
                cartItems: action.payload
            };
        default:
            return state;
    }
};

export default cartReducer;
