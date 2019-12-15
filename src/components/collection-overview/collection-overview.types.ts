import { ShopData } from "../../store/shop/shop.types";

export interface CollectionOverviewProps extends CollectionOverviewSelectors { }
export interface CollectionOverviewSelectors {
    collections: { [key: string]: ShopData } | null;
}