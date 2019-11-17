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

/*
Utility function called when removing items from the checkout page. Checks to see if the item quantity is 1
at which point it will filter out the item. Otherwise it will map the item back and decrement the
quantity by 1
*/
export const removeItemFromCartItems = (cartItems: Item[], itemToRemove: Item): Item[] => {
    const itemToRemoveSearch = cartItems.find((item) => item.id === itemToRemove.id);

    if (itemToRemoveSearch) {
        if (itemToRemoveSearch.quantity === 1) {
            return cartItems.filter((item: Item) => item.id !== itemToRemoveSearch.id)
        } else {
            return cartItems.map((item) => {
                return item.id === itemToRemoveSearch.id ? {
                    ...item,
                    quantity: item.quantity ? item.quantity - 1 : 1
                } : item
            })
        }
    }

    return {
        ...cartItems
    }
}
