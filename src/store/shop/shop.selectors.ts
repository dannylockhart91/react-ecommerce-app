import { createSelector } from "reselect";

import { AppState } from "../root.reducer";
import { ShopState } from "./shop.types";


const getShopState = (state: AppState) => state.shop;

export const getShopCollections = createSelector(
    [getShopState],
    (state: ShopState) => state.collections
);

export const getCollection = (collectionUrlParameter: string) => createSelector(
    [getShopCollections],
    (collections: any) => collections[collectionUrlParameter]);


