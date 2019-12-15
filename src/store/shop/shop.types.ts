export interface ShopState {
    collections: { [key: string]: ShopData } | null,
    isFetching: boolean
    errorMessage: string | null
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
    FetchCollections = '[Shop] Fetch Collections',
    FetchCollectionsSuccess = '[Shop] Fetch Collections Success',
    FetchCollectionsFailed = '[Shop] Fetch Collections Failed',
    UpdateCollections = '[Shop] Update Collections',
}

interface FetchCollections {
    type: ShopActionTypes.FetchCollections
}

interface FetchCollectionsSuccess {
    type: ShopActionTypes.FetchCollectionsSuccess
    payload: { [key: string]: ShopData }
}

interface FetchCollectionsFailed {
    type: ShopActionTypes.FetchCollectionsFailed
    payload: string
}

interface UpdateCollections {
    type: ShopActionTypes.UpdateCollections,
    payload: { [key: string]: ShopData }
}

export type ShopActions = FetchCollections | FetchCollectionsSuccess | FetchCollectionsFailed |UpdateCollections;