import React from 'react';
import { shallow } from 'enzyme';

import { CartDropdown } from './cart-dropdown.component';

describe('CartDropdown component', () => {
	let wrapper;
	let mockProps = {};

	beforeEach(() => {
		mockProps = {
			cartItems: [
				{
					id: 1,
					name: 'test',
					price: 8,
					imageUrl: 'test.test.com',
					quantity: 1
				}
			],
			cartItemCount: 1
		};
	});

	it('render CartDropdown component', () => {
		mockProps = {
			cartItems: [],
			cartItemCount: 2
		};
		wrapper = shallow(
			//@ts-ignore
			<CartDropdown {...mockProps} />
		);
		expect(wrapper).toMatchSnapshot();
	});

	it('should display empty cart message if there are no items to display', () => {
		mockProps = {
			cartItems: [],
			cartItemCount: 0
		};
		//@ts-ignore
		wrapper = shallow(<CartDropdown {...mockProps} />);
		expect.assertions(1);
		expect(
			wrapper
				.find('[id="cart-items"]')
				.html()
				.includes('Your cart is empty')
		).toEqual(true);
	});

	it('should display item and count when there are items to show', () => {
		//@ts-ignore
		wrapper = shallow(<CartDropdown {...mockProps} />);
	});
});
