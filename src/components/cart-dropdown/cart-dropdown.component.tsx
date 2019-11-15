import React from 'react';
import { connect } from 'react-redux';

import { AppState } from '../../store/root-reducer';
import { Item } from '../../store/cart/cart.types';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

interface CartDropdownProps {
	cartItems: Item[];
}

const CartDropdown: React.FC<CartDropdownProps> = ({cartItems}) => (
	<div className='cart-dropdown'>
		<div className='cart-items'>
			{cartItems.map((item: Item) => (
				<CartItem key={item.id} item={item} />
			))}
		</div>
		<CustomButton>GO TO CHECKOUT</CustomButton>
	</div>
);

const mapStateToProps = ({ cart: { cartItems } }: AppState) => ({
	cartItems
});

export default connect(mapStateToProps)(CartDropdown);
