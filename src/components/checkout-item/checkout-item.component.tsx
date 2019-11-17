import React from 'react';
import { Item } from '../../store/cart/cart.types';

import './checkout-item.styles.scss';
interface CheckoutItemProps {
	item: Item;
}

const CheckoutItem: React.FC<CheckoutItemProps> = ({ item }) => (
	<div className='checkout-item-container'>
		<div className='image-container'>
			<img src={item.imageUrl} alt='item' />
		</div>
		<span className='name'>{item.name}</span>
		<span className='quantity'>{item.quantity}</span>
		<span className='price'>{item.price}</span>
		<div className='remove-button'>&#10005;</div>
	</div>
);

export default CheckoutItem;
