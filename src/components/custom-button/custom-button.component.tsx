import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

export interface CustomButtonProps {
	buttonType?: any;
	handleClick?: any;
	googleSignIn?: boolean;
	inverted?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = (props) => (
	<CustomButtonContainer className={'custom-button'} onClick={props.handleClick} {...props}>
		{props.children}
	</CustomButtonContainer>
);

export default CustomButton;
