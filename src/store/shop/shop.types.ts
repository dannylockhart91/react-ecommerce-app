export interface ShopState {
    collections: ShopData[]
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