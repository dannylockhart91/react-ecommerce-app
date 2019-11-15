import { CartActions, CartActionTypes } from "./cart.types";

export const toggleShowCart = (): CartActionTypes => ({
    type: CartActions.TOGGLE_SHOW_CART
});
