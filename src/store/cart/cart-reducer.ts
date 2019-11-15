import { CartActions, CartActionTypes, CartState } from "./cart.types";

const initialState: CartState = {
    isHidden: true
};

const cartReducer = (state: CartState = initialState, action: CartActionTypes) => {
    switch (action.type) {
        case CartActions.TOGGLE_SHOW_CART:
            return {
                ...state,
                isHidden: !state.isHidden
            };
        default:
            return state;
    }
};

export default cartReducer;
