import { Item } from "../../store/cart/cart.types";
import { RouteComponentProps } from "react-router";
import { DispatchProp } from "react-redux";

export interface CartDropdownProps extends RouteComponentProps, DispatchProp {
	cartItems: Item[];
}
export interface cartDropdownSelectors {
	cartItems: Item[];
}