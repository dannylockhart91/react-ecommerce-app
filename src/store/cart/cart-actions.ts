import { CartActions, CartActionTypes, Item } from "./cart.types";

export const toggleShowCart = (): CartActionTypes => ({
    type: CartActions.TOGGLE_SHOW_CART
});

export const addItemToCart = (item: Item): CartActionTypes => ({
    type: CartActions.ADD_ITEM_TO_CART,
    payload: item
});

export const removeItemFromCart = (item: Item): CartActionTypes => ({
    type: CartActions.REMOVE_ITEM_FROM_CART,
    payload: item
});

export const clearItemFromCart = (item: Item): CartActionTypes => ({
    type: CartActions.CLEAR_ITEM_FROM_CART,
    payload: item
});

export const clearCart = (): CartActionTypes => ({
    type: CartActions.CLEAR_CART
});