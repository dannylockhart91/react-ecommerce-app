export interface CartState {
    isHidden: boolean;
    cartItems: Item[]
}

export interface Item {
    id: number,
    name: string;
    price: number;
    imageUrl: string,
    quantity?: number
}

export enum CartActionTypes {
    TOGGLE_SHOW_CART = 'TOGGLE_SHOW_CART',
    ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
    REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
    CLEAR_ITEM_FROM_CART = 'CLEAR_ITEM_FROM_CART'
}

interface ToggleShowCart {
    type: typeof CartActionTypes.TOGGLE_SHOW_CART
}

interface AddItemToCart {
    type: typeof CartActionTypes.ADD_ITEM_TO_CART,
    payload: Item
}

interface RemoveItemFromCart {
    type: typeof CartActionTypes.REMOVE_ITEM_FROM_CART,
    payload: Item
}

interface ClearItemFromCart {
    type: typeof CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: Item
}

export type CartActions = ToggleShowCart | AddItemToCart | RemoveItemFromCart | ClearItemFromCart
