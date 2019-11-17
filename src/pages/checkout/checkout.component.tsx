import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getCartItems, getCartCostTotal } from '../../store/cart/cart.selectors';

import { AppState } from '../../store/root-reducer';
import { Item } from '../../store/cart/cart.types';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

interface checkoutProps extends checkoutSelectors {}

const CheckoutPage: React.FC<checkoutProps> = ({ checkoutItems, total }) => (
	<div className='checkout-page-container'>
		<div className='checkout-header'>
			<div className='header-block'>
				<span>Product</span>
			</div>
			<div className='header-block'>
				<span>Description</span>
			</div>
			<div className='header-block'>
				<span>Quantity</span>
			</div>
			<div className='header-block'>
				<span>Price</span>
			</div>
			<div className='header-block'>
				<span>Remove</span>
			</div>
		</div>

		{checkoutItems.map((item) => (
			<CheckoutItem key={item.id} item={item}/>
		))}
		<div className='total'>
			<span>Total: £{total}</span>
		</div>
	</div>
);

interface checkoutSelectors {
	checkoutItems: Item[];
	total: number;
}

const mapStateToProps = createStructuredSelector<AppState, checkoutSelectors>({
	checkoutItems: getCartItems,
	total: getCartCostTotal
});

export default connect(mapStateToProps)(CheckoutPage);
