import { CartActions, CartActionTypes, Item } from "./cart.types";

export const toggleShowCart = (): CartActions => ({
    type: CartActionTypes.TOGGLE_SHOW_CART
});

export const addItemToCart = (item: Item): CartActions => ({
    type: CartActionTypes.ADD_ITEM_TO_CART,
    payload: item
})