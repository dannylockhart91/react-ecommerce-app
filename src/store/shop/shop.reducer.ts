import { ShopState, ShopActionTypes } from "./shop.types";

const initialState: ShopState = {
    collections: null
}

const shopRecuder = (state: ShopState = initialState, action: any) => {
    switch (action.type) {
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            }
        default:
            return state;
    }
}

export default shopRecuder;