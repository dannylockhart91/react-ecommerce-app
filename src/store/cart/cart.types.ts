export interface CartState {
    isHidden: boolean;
}

export enum CartActions {
    TOGGLE_SHOW_CART = 'TOGGLE_SHOW_CART'
}

interface ToggleShowCart {
    type: typeof CartActions.TOGGLE_SHOW_CART
}

export type CartActionTypes = ToggleShowCart
