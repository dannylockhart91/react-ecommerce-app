export interface ShopState {
    collections: { [key: string]: ShopData } | null
}
export interface ShopData {
    id: number,
    title: string,
    routeName: string,
    items: (ShopDataItems)[]
}

export interface ShopDataItems {
    id: number,
    name: string,
    imageUrl: string,
    price: number
}

export enum ShopActionTypes {
    UPDATE_COLLECTIONS = 'UPDATE_COLLECTIONS'
}

interface UpdateCollections {
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: { [key: string]: ShopData }
}

export type ShopActions = UpdateCollections;