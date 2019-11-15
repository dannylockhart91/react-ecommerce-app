import React from 'react';

import './custom-button.styles.scss';

interface CustomButtonProps {
	buttonType?: any;
	handleClick?: any;
	customClassName?: string;
	inverted?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = (props) => (
	<button
		className={`${props.inverted ? 'inverted' : ''} ${
			props.customClassName ? props.customClassName : ''
		} custom-button`}
		type={props.buttonType}
		onClick={props.handleClick}>
		{props.children}
	</button>
);

export default CustomButton;
