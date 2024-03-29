import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getCartItems, getCartCostTotal } from '../../store/cart/cart.selectors';

import { AppState } from '../../store/root.reducer';
import { Item } from '../../store/cart/cart.types';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-payment-button/stripe-payment-button.component';

import { CheckoutContainer } from './checkout.styles';

interface checkoutProps extends checkoutSelectors {}

const CheckoutPage: React.FC<checkoutProps> = ({ checkoutItems, total }) => (
	<CheckoutContainer className='checkout-page-container'>
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
			<CheckoutItem key={item.id} item={item} />
		))}
		<div className='total'>
			<span>Total: £{total}</span>
		</div>
		<div className='test-payment-warning'>
			*Please use the following test credit card for payments*
			<br />
			4242 4242 4242 4242 - EXP: 01/20 - CVC: 123
		</div>
		<StripeCheckoutButton price={total} />
	</CheckoutContainer>
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
