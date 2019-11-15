import { Item } from "./cart.types";

/*
Utility function called by the cart reducer to organise items into the cart based on quanitiy.
Attemps to find the item and increments the quantity
*/
export const addItemToCartItems = (cartItems: Item[], itemToAdd: Item): Item[] => {
    const itemExists = cartItems.find((item) => item.id === itemToAdd.id);

    if (itemExists) {
        return cartItems.map((cartItem: Item) => {
            return cartItem.id === itemToAdd.id ? {
                ...cartItem,
                quantity: cartItem.quantity ? cartItem.quantity + 1 : 0
            } : cartItem;
        });
    }
    return [
        ...cartItems,
        {
            ...itemToAdd,
            quantity: 1
        }
    ]
};
