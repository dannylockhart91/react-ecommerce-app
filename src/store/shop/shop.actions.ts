import { ShopActionTypes, ShopActions } from './shop.types';

export const UpdateCollections = (collection: any): ShopActions => ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collection
})