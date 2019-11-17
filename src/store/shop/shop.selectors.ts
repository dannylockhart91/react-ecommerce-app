import { AppState } from "../root.reducer";
import { createSelector } from "reselect";
import { ShopState } from "./shop.types";

const getShopState = (state: AppState) => state.shop;

export const getShopCollections = createSelector(
    [getShopState],
    (state: ShopState) => state.collections
)