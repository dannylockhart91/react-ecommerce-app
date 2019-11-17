import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import { PUBLISHABLE_KEY } from '../../shared/config/stripe.config';

interface StripeCheckoutProps {
	price: any;
}
const StripeCheckoutButton: React.FC<StripeCheckoutProps> = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = PUBLISHABLE_KEY;

	const onToken = (token: any) => {
		console.log(token);
		alert('Payment Successful');
	};

	return (
		<StripeCheckout
			label='Pay Now'
			name='CRWN Clothing'
			currency='GBP'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is £${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
