import { ShopState } from "./shop.types";
import SHOP_DATA from './shop.data'

const initialState: ShopState = {
    collections: SHOP_DATA
}

const shopRecuder = (state: ShopState = initialState, actions: any) => {
    switch (actions.type) {
        default:
            return state;
    }
}

export default shopRecuder;