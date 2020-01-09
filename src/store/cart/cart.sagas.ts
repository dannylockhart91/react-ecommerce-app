import { takeLatest, put, all, call, select } from 'redux-saga/effects';
import { UserActions } from "../user/user.types";
import { clearCart, setCartFromFirebase } from "./cart-actions";
import { CartActions } from './cart.types';
import { getCurrentUser } from '../user/user.selectors';
import { getCartItems } from './cart.selectors';
import { getUserCartRef } from '../../shared/config/firebase.utils';

export function* clearCartOnSignOut() {
    yield put(clearCart());
}

export function* updateCartInFirebase() {
    const currentUser = yield select(getCurrentUser);
    if (currentUser) {
        try {
            const cartRef = yield getUserCartRef(currentUser.id);
            const cartItems = yield select(getCartItems);
            yield cartRef.update({ cartItems });
        } catch (e) {
            console.log(e);
        }
    }
}

export function* checkCartFromFirebase({ payload: user }: any) {
    const cartRef = yield getUserCartRef(user.id);
    const cartSnapshot = yield cartRef.get();
    yield put(setCartFromFirebase(cartSnapshot.data().cartItems));
}

export function* onCartChange() {
    yield takeLatest([
        CartActions.ADD_ITEM_TO_CART,
        CartActions.REMOVE_ITEM_FROM_CART,
        CartActions.CLEAR_ITEM_FROM_CART
    ], updateCartInFirebase);
}

export function* onSignOutSuccess() {
    yield takeLatest(UserActions.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* onSignInSuccess() {
    yield takeLatest(UserActions.SIGN_IN_SUCCESS, checkCartFromFirebase);
}

export function* cartSagas() {
    yield all([
        call(onSignOutSuccess),
        call(onSignInSuccess),
        call(onCartChange)
    ]);
}