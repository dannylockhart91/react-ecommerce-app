import React from 'react';
import { connect } from 'react-redux';

import { Item } from '../../store/cart/cart.types';
import { addItemToCart } from '../../store/cart/cart-actions';

import { CollectionItemContainer, AddButton } from './collection-item.styles';
interface CollectionItemProps {
	item: Item;
	addItemToCart: any;
}

const CollectionItem: React.FC<CollectionItemProps> = ({ item, addItemToCart }: CollectionItemProps) => {
	const { imageUrl, name, price } = item;
	return (
		<CollectionItemContainer className='collection-item'>
			<div
				className='image'
				style={{
					backgroundImage: `url(${imageUrl})`
				}}
			/>
			<div className='collection-item-footer'>
				<span className='name'>{name}</span>
				<span className='price'>£{price}</span>
			</div>
            <AddButton inverted handleClick={() => addItemToCart(item)}>
                ADD TO CART
            </AddButton>
		</CollectionItemContainer>
	);
};

/*
Map dispatchable actions to the component props
*/
const mapDispatchToProps = (dispatch: any) => ({
	addItemToCart: (item: Item) => dispatch(addItemToCart(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
