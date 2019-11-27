import React from 'react';
import { connect } from 'react-redux';

import { Item } from '../../store/cart/cart.types';
import { clearItemFromCart, addItemToCart, removeItemFromCart } from '../../store/cart/cart-actions';

import { CheckoutItemContainer } from './checkout-item.styles';
interface CheckoutItemProps {
	item: Item;
	clearItem: any;
	addItem: any;
	removeItem: any;
}

const CheckoutItem: React.FC<CheckoutItemProps> = ({ item, clearItem, addItem, removeItem }) => {
	const { imageUrl, name, quantity, price } = item;
	return (
		<CheckoutItemContainer className='checkout-item-container'>
			<div className='image-container'>
				<img src={imageUrl} alt='item' />
			</div>
			<span className='name'>{name}</span>
			<span className='quantity'>
				<div className='arrow' onClick={() => removeItem(item)}>
					&#10094;
				</div>
				<span className='value'>{quantity} </span>
				<div className='arrow' onClick={() => addItem(item)}>
					&#10095;
				</div>
			</span>
			<span className='price'>£{price}</span>
			<div className='remove-button' onClick={() => clearItem(item)}>
				&#10005;
			</div>
		</CheckoutItemContainer>
	);
};

const mapDispatchToProps = (dispatch: any) => ({
	clearItem: (item: Item) => dispatch(clearItemFromCart(item)),
	addItem: (item: Item) => dispatch(addItemToCart(item)),
	removeItem: (item: Item) => dispatch(removeItemFromCart(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
