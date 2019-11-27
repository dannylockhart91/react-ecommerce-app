import React from 'react';
import { CartItemContainer } from './cart-item.styles';
import { Item } from '../../store/cart/cart.types';

interface CartItemProps {
	item: Item;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
	return (
		<CartItemContainer className='cart-item-container'>
			<img src={item.imageUrl} alt='item' />
			<div className='item-details'>
				<span className='item-name'>{item.name}</span>
				<span className='item-price'>
					{item.quantity} x £{item.price}
				</span>
			</div>
		</CartItemContainer>
	);
};
export default CartItem;
