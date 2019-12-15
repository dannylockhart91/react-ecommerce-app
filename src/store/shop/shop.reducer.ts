import { ShopState, ShopActionTypes } from "./shop.types";

const initialState: ShopState = {
    collections: null,
    isFetching: false,
    errorMessage: null
};

const shopReducer = (state: ShopState = initialState, action: any) => {
    switch (action.type) {
        case ShopActionTypes.FetchCollections:
            return {
                ...state,
                isFetching: true
            };
        case ShopActionTypes.FetchCollectionsSuccess:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            };
        default:
            return state;
    }
};

export default shopReducer;
