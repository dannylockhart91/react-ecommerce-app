import React from 'react';
import { connect } from 'react-redux';

import { Item } from '../../store/cart/cart.types';
import { addItemToCart } from '../../store/cart/cart-actions';

import CustomButton from '../custom-button/custom-button.component';

import './component.item.styles.scss';
interface CollectionItemProps {
	item: Item;
	addItemToCart: any;
}

const CollectionItem: React.FC<CollectionItemProps> = (props) => {
	const { imageUrl, name, price } = props.item;
	return (
		<div className='collection-item'>
			<div
				className='image'
				style={{
					backgroundImage: `url(${imageUrl})`
				}}
			/>
			<div className='collection-item-footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
			<CustomButton
				customClassName='custom-button'
				inverted
				handleClick={() => props.addItemToCart(props.item)}>
				ADD TO CART
			</CustomButton>
		</div>
	);
};

/*
Map dispatchable actions to the component props
*/
const mapDispatchToProps = (dispatch: any) => ({
	addItemToCart: (item: Item) => dispatch(addItemToCart(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
