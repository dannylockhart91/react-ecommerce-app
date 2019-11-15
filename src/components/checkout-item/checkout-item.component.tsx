import React from 'react';
import './checkout-item.styles.scss';



const CheckoutItem: React.FC = () => (
	<div className='checkout-item-container'>
		<div className='image-container'>
            <img src="" alt='item'/>
        </div>
        <span className='name'></span>
        <span className='quantity'></span>
        <span className='price'></span>
        <div className='remove-button'>&#10005;</div>
	</div>
);

export default CheckoutItem;
