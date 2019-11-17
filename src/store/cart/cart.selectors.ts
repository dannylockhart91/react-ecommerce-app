import { createSelector } from 'reselect';
import { AppState } from '../root.reducer';
import { CartState, Item } from './cart.types';

const selectCartState = (state: AppState) => (state.cart);

export const getCartItems = createSelector(
    [selectCartState],
    (cartState: CartState) => cartState.cartItems);

export const getCartItemsCount = createSelector(
    [getCartItems],
    (cartItems: Item[]) => cartItems.reduce((total, item) => {
        return item.quantity ? total + item.quantity : 0;
    }, 0)
)

export const getIsCartHidden = createSelector(
    [selectCartState],
    (state: CartState) => state.isHidden
)

export const getCartCostTotal = createSelector(
    [getCartItems],
    (cartItems: Item[]) => cartItems.reduce((total, item) => {
        return item.quantity ? total + (item.price * item.quantity) : item.price
    }, 0)
)