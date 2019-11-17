import { CartActions, CartActionTypes, Item } from "./cart.types";

export const toggleShowCart = (): CartActions => ({
    type: CartActionTypes.TOGGLE_SHOW_CART
});

export const addItemToCart = (item: Item): CartActions => ({
    type: CartActionTypes.ADD_ITEM_TO_CART,
    payload: item
})

export const removeItemFromCart = (item: Item): CartActions => ({
    type: CartActionTypes.REMOVE_ITEM_FROM_CART,
    payload: item
})

export const clearItemFromCart = (item: Item): CartActions => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})