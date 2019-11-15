import React from 'react';
import './cart-item.styles.scss';
import { Item } from '../../store/cart/cart.types';

interface CartItemProps {
	item: Item;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
	return (
		<div className='cart-item-container'>
			<img src={item.imageUrl} alt='item' />
			<div className='item-details'>
				<span className='item-name'>{item.name}</span>
				<span className='item-price'>
					{item.quantity} x £{item.price}
				</span>
			</div>
		</div>
	);
};
export default CartItem;
