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

export enum CartActions {
    TOGGLE_SHOW_CART = 'TOGGLE_SHOW_CART',
    ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
    REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
    CLEAR_ITEM_FROM_CART = 'CLEAR_ITEM_FROM_CART',
    CLEAR_CART = '[Cart] Clear cart',
    SET_CART_FROM_FIREBASE = '[Cart] Set cart from firebase',
    UPDATE_CART_IN_FIREBASE = '[Card] Update cart in firebase'
}

interface ToggleShowCart {
    type: typeof CartActions.TOGGLE_SHOW_CART
}

interface AddItemToCart {
    type: typeof CartActions.ADD_ITEM_TO_CART,
    payload: Item
}

interface RemoveItemFromCart {
    type: typeof CartActions.REMOVE_ITEM_FROM_CART,
    payload: Item
}

interface ClearItemFromCart {
    type: typeof CartActions.CLEAR_ITEM_FROM_CART,
    payload: Item
}

interface ClearCart {
    type: typeof CartActions.CLEAR_CART
}

interface SetCartFromFirebase {
    type: typeof CartActions.SET_CART_FROM_FIREBASE,
    payload: Item[]
}

interface UpdateCartInFirebase {
    type: typeof CartActions.UPDATE_CART_IN_FIREBASE
}

export type CartActionTypes =
    ToggleShowCart |
    AddItemToCart |
    RemoveItemFromCart |
    ClearItemFromCart |
    ClearCart |
    SetCartFromFirebase |
    UpdateCartInFirebase;
