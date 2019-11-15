import { combineReducers } from 'redux';

import userReducer from './user/user-reducer';
import cartReducer from './cart/cart-reducer';
import { UserState } from './user/user.types';
import { CartState } from './cart/cart.types'

export interface AppState {
    user: UserState,
    cart: CartState
}

export default combineReducers({
    user: userReducer,
    cart: cartReducer
});
